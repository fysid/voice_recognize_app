import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'files',
    loadComponent: () => import('./files/files.page').then((m) => m.FilesPage),
  },
  {
    path: 'record_tab',
    loadComponent: () => import('./record_tab/record_tab.page').then((m) => m.RecordPage),
  },
  { 
    path: 'vosk_recognize_tab',
    loadComponent: () => import('./vosk_recognize_tab/vosk_recognize_tab.page').then((m) => m.RecognizerPage),
  },
];
