import { Component } from '@angular/core';
import {
  IonApp, IonRouterOutlet, IonHeader, IonToolbar,
  IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons,
  IonItem, IonList, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonHeader, IonToolbar,
    IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons,
    IonItem, IonList, IonButtons, IonButton
  ],
})
export class AppComponent {
  constructor() {}
}
