import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonButton } from '@ionic/angular/standalone';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions} from '@ionic-native/media-capture/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'record_tab.page.html',
  styleUrls: ['record_tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonButton],
})

export class RecordPage {
  constructor(private mediaCapture: MediaCapture) { }

  recordAudio() {
    const options: CaptureAudioOptions = { limit: 1, duration: 60 };
    this.mediaCapture.captureAudio(options)
      .then((data: MediaFile[] | CaptureError) => {
        if (data instanceof Array) {
          console.log('Audio Data:', data);
        } else {
          console.error('Error:', data);
        }
      });
  }

  async saveAudioFile(audioFile: MediaFile) {
    try {
      const result = await Filesystem.writeFile({
        path: 'audio/myAudioFile.wav',
        data: audioFile.fullPath,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });
      console.log('File saved:', result.uri);
    } catch (e) {
      console.error('Unable to save file', e);
    }
  }
}
