import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'coming-soon',
    loadComponent: () => import('@shared/views/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent)
  },
  {
    path: '**',
    redirectTo: 'coming-soon',
  },
];
