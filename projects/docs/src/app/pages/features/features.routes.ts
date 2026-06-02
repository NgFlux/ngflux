import { Routes } from '@angular/router';

import { FeaturesPage } from './features.page';
import { FeaturesButtonPage } from './button/button.page';
import { FeaturesDialogPage } from './dialog/dialog.page';
import { FeaturesLoadingPage } from './loading/loading.page';
import { FeaturesPaginationPage } from './pagination/pagination.page';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesPage,
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
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
