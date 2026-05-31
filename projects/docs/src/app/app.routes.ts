import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/root/root.routes').then(v => v.routes) },
  { path: 'guides', loadChildren: () => import('./pages/guides/guides.routes').then(v => v.routes) },
  { path: 'features', loadChildren: () => import('./pages/features/features.routes').then(v => v.routes) },
];
