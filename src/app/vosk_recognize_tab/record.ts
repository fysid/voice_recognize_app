import { Injectable } from '@angular/core';
import { Model, Recognizer } from 'vosk';

class VoiceRecognition {
    private model: Model;
    private recognizer: Recognizer<any>;

    constructor(modelPath: string) {
        this.model = new Model(modelPath);
        this.recognizer = new Recognizer({ model: this.model, sampleRate: 16000 });
    }

    async recognizeSpeech(audioBuffer: Buffer): Promise<string> {
        this.recognizer.acceptWaveform(audioBuffer);
        const result = this.recognizer.result();
        return result.text;
    }

    close() {
        this.model.free();
        this.recognizer.free();
    }
}

@Injectable({providedIn: 'root'})
class Record {
    private audioContext: AudioContext;
    private recognition: VoiceRecognition;
    private mediaStreamSource: MediaStreamAudioSourceNode;
    private workletNode: AudioWorkletNode;
    private mediaStream: MediaStream;
    private currentRecordingStatus: boolean
    private stream;
    private interval: any;
    private processInterval: number = 5000;

    readonly MODEL_PATH = "./vosk-model-small-ru-0.22";

    constructor() {
        this.currentRecordingStatus = false
        this.audioContext = new AudioContext();
        this.recognition = new VoiceRecognition(this.MODEL_PATH);
        this.setupMicrophone();
    }

    private async processAudioData(audioBuffer: Buffer): Promise<string> {
        return this.recognition.recognizeSpeech(audioBuffer);
    }
    
    private async setupMicrophone() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                await this.audioContext.audioWorklet.addModule('audioProcessor.js');
                this.setupAudioProcessing();
            } catch (err) {
                console.error("Microphone access error", err);
            }
        } else {
            console.error("Microphone not supported");
        }
    }

    private async startRecording() {
        if (this.currentRecordingStatus) {
            return;
        }
        this.currentRecordingStatus = true;
        this.mediaStreamSource = this.audioContext.createMediaStreamSource(this.stream);
        this.workletNode = new AudioWorkletNode(this.audioContext, 'audio-processor');
        
        this.mediaStreamSource.connect(this.workletNode);
        this.workletNode.connect(this.audioContext.destination);
    }

    private stopRecording() {
        this.currentRecordingStatus = false;

        if (this.mediaStreamSource) {
            this.mediaStreamSource.disconnect();
        }
        if (this.workletNode) {
            this.workletNode.disconnect();
        }
        if (this.mediaStream) {
            const tracks = this.mediaStream.getTracks();
            tracks.forEach(track => track.stop());
        }
        if (this.audioContext) {
            this.audioContext.close();
        }
    }

    public getStatus(): boolean {
        return this.currentRecordingStatus
    }

    
    public async switchMode(callback: (text: string) => void): Promise<boolean> {
        if (this.currentRecordingStatus) {
            clearInterval(this.interval);
            this.stopRecording();
        } else {
            this.startRecording();
            this.interval = setInterval(async () => {
            }, this.processInterval);
        }
        return this.getStatus();
    }

    private setupAudioProcessing() {
        this.workletNode = new AudioWorkletNode(this.audioContext, 'audio-processor');

        this.workletNode.port.onmessage = (event) => {
            const audioData = event.data;
            const buffer = Buffer.from(audioData.buffer);
        };

        this.mediaStreamSource.connect(this.workletNode);
        this.workletNode.connect(this.audioContext.destination);
    }

}

export default Record;
