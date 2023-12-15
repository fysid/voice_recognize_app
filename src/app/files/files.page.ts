import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'files.page.html',
  styleUrls: ['files.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons],
})
export class FilesPage {
  constructor() {}
}
