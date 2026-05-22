import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgFlex } from 'ngflex';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNgFlex({
      pagination: {
        limit: 20,
        transform: {
          getCurrentPage: (data) => 1,
          getFrom: (data) => 1,
          getTo: (data) => 20,
          getLastPage: data => 5,
          getPerPage: data => 20,
          getTotal: data => 95,
          getData: data => [],
        }
      },
    }),
  ],
};
