import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideNgFlux } from '@ngflux/ngflux';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideNgFlux({
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
