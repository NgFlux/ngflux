import { Routes } from '@angular/router';

import { FeaturesPage } from './features.page';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesPage,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },

      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.page').then(m => m.FeaturesOverviewPage),
        title: 'Overview',
      },

      {
        path: 'button',
        loadComponent: () => import('./button/button.page').then(m => m.FeaturesButtonPage),
        title: 'Button',
      },

      {
        path: 'dialog',
        loadComponent: () => import('./dialog/dialog.page').then(m => m.FeaturesDialogPage),
        title: 'Dialog',
      },

      {
        path: 'loading',
        loadComponent: () => import('./loading/loading.page').then(m => m.FeaturesLoadingPage),
        title: 'Loading',
      },

      {
        path: 'pagination',
        loadComponent: () => import('./pagination/pagination.page').then(m => m.FeaturesPaginationPage),
        title: 'Pagination',
      },
    ],
  }
];
