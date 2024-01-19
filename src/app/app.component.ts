import { Component } from '@angular/core';
import {
  IonApp, IonRouterOutlet, IonHeader, IonToolbar,
  IonTitle, IonContent, IonMenu, 
  IonItem, IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonHeader, IonToolbar,
    IonTitle, IonContent, IonMenu,
    IonItem, IonList
  ],
})
export class AppComponent {
  constructor() {}
}
