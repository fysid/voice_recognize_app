import {
    Injectable,
  } from '@angular/core';
 
  @Injectable({providedIn: 'root'})
  export class TestVosk {
    private audioContext;
    private mediaStreamSource;
    private voskRecognizer;
    private isRecognizing = false;

    constructor() {
    }

    async init() {
        this.audioContext = new AudioContext();

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            this.startUserMedia(stream);
        } catch (e) {
            console.error("microphone error:", e);
        }

        this.initVoskRecognizer();
    }

    initVoskRecognizer() {
    }

    startUserMedia(stream) {
        this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
        this.startRecognition();
    }

    startRecognition() {
        this.isRecognizing = true;
    }

    stopRecognition() {
        if (this.isRecognizing) {
            this.isRecognizing = false;
        }
    }

}
