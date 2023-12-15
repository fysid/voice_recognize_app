import { VoiceRecorder, VoiceRecorderPlugin } from 'capacitor-voice-recorder';

export class VoiceRecorderComponent {
    recording: boolean = false;
    voiceRecorder: VoiceRecorderPlugin;
  
    constructor() {
      this.voiceRecorder = VoiceRecorder;
    }
  
    async startRecording() {
      this.recording = true;
      await this.voiceRecorder.startRecording();
    }
  
    async stopRecording() {
      const recordingData = await this.voiceRecorder.stopRecording();
      this.recording = false;
      console.log(recordingData.value);
    }
  }
  