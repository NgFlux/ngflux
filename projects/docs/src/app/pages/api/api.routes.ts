import { NgFluxRoutes } from '@ngflux/ngflux';

import { ApiPage } from './api.page';


export const routes: NgFluxRoutes = [
  {
    path: '',
    component: ApiPage,
    title: 'API Reference',
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },

      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.page').then(m => m.ApiOverviewPage),
        addParentTitle: true,
        title: 'Overview',
      },

      {
        path: 'ButtonOptions',
        loadComponent: () => import('./ButtonOptions/ButtonOptions.page').then(m => m.ApiButtonOptionsPage),
        addParentTitle: true,
        title: 'ButtonOptions',
      },

      {
        path: 'DialogAlertOptions',
        loadComponent: () => import('./DialogAlertOptions/DialogAlertOptions.page').then(m => m.ApiDialogAlertOptionsPage),
        addParentTitle: true,
        title: 'DialogAlertOptions',
      },

      {
        path: 'DialogConfirmOptions',
        loadComponent: () => import('./DialogConfirmOptions/DialogConfirmOptions.page').then(m => m.ApiDialogConfirmOptionsPage),
        addParentTitle: true,
        title: 'DialogConfirmOptions',
      },

      {
        path: 'DialogPromptOptions',
        loadComponent: () => import('./DialogPromptOptions/DialogPromptOptions.page').then(m => m.ApiDialogPromptOptionsPage),
        addParentTitle: true,
        title: 'DialogPromptOptions',
      },

      {
        path: 'PaginationTransformer',
        loadComponent: () => import('./PaginationTransformer/PaginationTransformer.page').then(m => m.ApiPaginationTransformerPage),
        addParentTitle: true,
        title: 'PaginationTransformer',
      },
    ],
  }
];
