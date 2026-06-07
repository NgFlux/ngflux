import { Component } from '@angular/core';
import { DocCodeComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-guides-configuration-page',
  templateUrl: 'configuration.page.html',
  styleUrls: ['configuration.page.scss'],
  imports: [
    DocCodeComponent,
    DocSectionComponent,
  ],
})
export class GuidesConfigurationPage {

  protected readonly configCode = `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux, NgFluxConfig } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux({
      // Loading Options
      loading: {
        showOnRouteNavigation: true,
      },

      // Pagination Options
      pagination: {
        limit: 20,
        transform: {
          getCurrentPage: data => 1,
          getFrom: data => 1,
          getTo: data => 20,
          getLastPage: data => 5,
          getPerPage: data => 20,
          getTotal: data => 95,
          getData: data => [],
        }
      },

      ...
    }),
    ...
  ]
};
  `;

}
