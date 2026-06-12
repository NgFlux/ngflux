import { NgFluxRoutes } from '@ngflux/ngflux';

import { GuidesPage } from './guides.page';

export const routes: NgFluxRoutes = [
  {
    path: '',
    component: GuidesPage,
    title: 'Guides',
    children: [
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full',
      },

      {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.page').then(m => m.GuidesGettingStartedPage),
        addParentTitle: true,
        title: 'Getting Started',
      },

      {
        path: 'configuration',
        loadComponent: () => import('./configuration/configuration.page').then(m => m.GuidesConfigurationPage),
        addParentTitle: true,
        title: 'NgFlux Configuration',
      },

      {
        path: 'theming',
        loadComponent: () => import('./theming/theming.page').then(m => m.GuidesThemingPage),
        addParentTitle: true,
        title: 'Theming NgFlux',
      },
    ],
  }
];
