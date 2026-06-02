import { Routes } from '@angular/router';

import { GuidesPage } from './guides.page';
import { GuidesGettingStartedPage } from './getting-started/getting-started.page';
import { GuidesThemingPage } from './theming/theming.page';

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
        component: GuidesGettingStartedPage,
        title: 'Getting Started',
      },

      {
        path: 'theming',
        component: GuidesThemingPage,
        title: 'Theming NgFlux',
      },
    ],
  }
];
