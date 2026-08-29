import { Routes } from '@angular/router';
import { NgFluxRoutes } from '@ngflux/ngflux';

import { FeaturesPage } from './features.page';

export const routes: NgFluxRoutes = [
  {
    path: '',
    component: FeaturesPage,
    title: 'Features',
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },

      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.page').then(m => m.FeaturesOverviewPage),
        addParentTitle: true,
        title: 'Overview',
      },

      {
        path: 'button',
        loadComponent: () => import('./button/button.page').then(m => m.FeaturesButtonPage),
        addParentTitle: true,
        title: 'Button',
      },

      {
        path: 'dialog',
        loadComponent: () => import('./dialog/dialog.page').then(m => m.FeaturesDialogPage),
        addParentTitle: true,
        title: 'Dialog',
      },

      {
        path: 'loading',
        loadComponent: () => import('./loading/loading.page').then(m => m.FeaturesLoadingPage),
        addParentTitle: true,
        title: 'Loading',
      },

      {
        path: 'pagination',
        loadComponent: () => import('./pagination/pagination.page').then(m => m.FeaturesPaginationPage),
        addParentTitle: true,
        title: 'Pagination',
      },

      {
        path: 'select',
        loadComponent: () => import('./select/select.page').then(m => m.FeaturesSelectPage),
        addParentTitle: true,
        title: 'Select',
      },

      {
        path: 'pin',
        loadComponent: () => import('./pin/pin.page').then(m => m.FeaturesPinPage),
        addParentTitle: true,
        title: 'Pin Input',
      },

      {
        path: 'tab',
        loadComponent: () => import('./tab/tab.page').then(m => m.FeaturesTabPage),
        addParentTitle: true,
        title: 'Tab',
      },

      {
        path: 'frame',
        loadComponent: () => import('./frame/frame.page').then(m => m.FeaturesFramePage),
        addParentTitle: true,
        title: 'Frame',
      },

      {
        path: 'toast',
        loadComponent: () => import('./toast/toast.page').then(m => m.FeaturesToastPage),
        addParentTitle: true,
        title: 'Toast',
      },
    ],
  }
];
