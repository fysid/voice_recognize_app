import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons} from '@ionic/angular/standalone';
import Record from './test';

@Component({
  selector: 'app-home',
  templateUrl: 'vosk_recognize_tab.page.html',
  styleUrls: ['vosk_recognize_tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons],
})

export class RecognizerPage {
  private record: Record;
  private recognizedText: string;

  constructor() {
    this.record = new Record();
    this.recognizedText = "";
  }

  public async switchModeAndUpdateText() {
    await this.record.switchMode((text: string) => {
        this.recognizedText = text;
        console.log("Recognized Text:", this.recognizedText);
    });
  }

  public getRecognizedText() {
    return this.recognizedText;
  }

  public getButtonText() {
    if (this.record.getStatus()) {
      return "Stop record";
    } else {
      return "Start record";
    }
  }

}
