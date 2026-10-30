
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'captcha',
    loadComponent: () =>
      import('./pages/captcha/captcha.component')
        .then(m => m.CaptchaComponent)
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./pages/result/result.component')
        .then(m => m.ResultComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
