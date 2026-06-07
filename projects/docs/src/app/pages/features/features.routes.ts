import { Routes } from '@angular/router';

import { FeaturesPage } from './features.page';
import { FeaturesButtonPage } from './button/button.page';
import { FeaturesDialogPage } from './dialog/dialog.page';
import { FeaturesLoadingPage } from './loading/loading.page';
import { FeaturesPaginationPage } from './pagination/pagination.page';
import { FeaturesOverviewPage } from './overview/overview.page';

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
        component: FeaturesOverviewPage,
        title: 'Overview',
      },

      {
        path: 'button',
        component: FeaturesButtonPage,
        title: 'Button',
      },

      {
        path: 'dialog',
        component: FeaturesDialogPage,
        title: 'Dialog',
      },

      {
        path: 'loading',
        component: FeaturesLoadingPage,
        title: 'Loading',
      },

      {
        path: 'pagination',
        component: FeaturesPaginationPage,
        title: 'Pagination',
      },
    ],
  }
];
