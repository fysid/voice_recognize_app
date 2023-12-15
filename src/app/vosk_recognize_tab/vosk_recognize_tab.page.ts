import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'vosk_recognize_tab.page.html',
  styleUrls: ['vosk_recognize_tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons],
})
export class RecognizerPage {
  constructor() {}
}
