import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-guides-configuration-page',
  templateUrl: 'configuration.page.html',
  styleUrls: ['configuration.page.scss'],
  imports: [
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    RouterLink,
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
    }),
    ...
  ]
};
  `;

  protected readonly loadingOptions = {
    config: `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux, NgFluxConfig } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux({
      // Loading Options
      loading: {
        showOnRouteNavigation: true,
        component: MyCustomLoadingComponent,
      },
    }),
    ...
  ]
};
    `,

    component: `
import { Component } from '@angular/core';

@Component({
  selector: 'ngf-loading',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
  imports: [],
})
export class MyCustomLoadingComponent {}
    `,

    html: `
<svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>

    `,

    scss: `
:host {
  display: block;

  svg {
    width: 3.25em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 5;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
}
    `,
  };

  protected readonly dialogOptions = `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux, NgFluxConfig } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux({
      // Dialog Options
      dialog: {
        alert: {
          okayButton: { text: 'Yeah!', .... },
        },
        confirm: {
          okayButton: { text: 'Yeah!', .... },
          cancelButton: { text: 'Nah!', ...},
        },
        prompt: {
          submitButton: { text: "Let's Go!", .... },
          cancelButton: { text: 'Nah!', ...},
        },
      },
    }),
    ...
  ]
};
  `;

  protected readonly paginationOptions = `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux, NgFluxConfig } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux({
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
    }),
    ...
  ]
};
  `;


}
