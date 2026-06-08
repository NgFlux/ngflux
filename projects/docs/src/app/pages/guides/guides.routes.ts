import { Routes } from '@angular/router';

import { GuidesPage } from './guides.page';

export const routes: Routes = [
  {
    path: '',
    component: GuidesPage,
    children: [
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full',
      },

      {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.page').then(m => m.GuidesGettingStartedPage),
        title: 'Getting Started',
      },

      {
        path: 'configuration',
        loadComponent: () => import('./configuration/configuration.page').then(m => m.GuidesConfigurationPage),
        title: 'NgFlux Configuration',
      },

      {
        path: 'theming',
        loadComponent: () => import('./theming/theming.page').then(m => m.GuidesThemingPage),
        title: 'Theming NgFlux',
      },
    ],
  }
];
