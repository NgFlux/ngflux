import { Routes } from '@angular/router';

import { ApiPage } from './api.page';


export const routes: Routes = [
  {
    path: '',
    component: ApiPage,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },

      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.page').then(m => m.ApiOverviewPage),
        title: 'Overview',
      },

      {
        path: 'ButtonOptions',
        loadComponent: () => import('./ButtonOptions/ButtonOptions.page').then(m => m.ApiButtonOptionsPage),
        title: 'ButtonOptions',
      },

      {
        path: 'DialogAlertOptions',
        loadComponent: () => import('./DialogAlertOptions/DialogAlertOptions.page').then(m => m.ApiDialogAlertOptionsPage),
        title: 'DialogAlertOptions',
      },

      {
        path: 'DialogConfirmOptions',
        loadComponent: () => import('./DialogConfirmOptions/DialogConfirmOptions.page').then(m => m.ApiDialogConfirmOptionsPage),
        title: 'DialogConfirmOptions',
      },

      {
        path: 'DialogPromptOptions',
        loadComponent: () => import('./DialogPromptOptions/DialogPromptOptions.page').then(m => m.ApiDialogPromptOptionsPage),
        title: 'DialogPromptOptions',
      },

      {
        path: 'PaginationTransformer',
        loadComponent: () => import('./PaginationTransformer/PaginationTransformer.page').then(m => m.ApiPaginationTransformerPage),
        title: 'PaginationTransformer',
      },
    ],
  }
];
