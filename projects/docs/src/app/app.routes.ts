import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.routes').then(v => v.routes) },
  { path: 'guides', loadChildren: () => import('./pages/guides/guides.routes').then(v => v.routes) },
  { path: 'components', loadChildren: () => import('./pages/components/components.routes').then(v => v.routes) },
];
