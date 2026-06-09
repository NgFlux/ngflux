import { Component, inject } from '@angular/core';
import { NgFluxLoading } from '@ngflux/ngflux';

import {
  DocCodeComponent,
  DocCodeGroupComponent,
  DocSectionComponent,
} from '@docs/core';

@Component({
  selector: 'app-features-loading-page',
  templateUrl: 'loading.page.html',
  styleUrls: ['loading.page.scss'],
  imports: [
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
  ],
})
export class FeaturesLoadingPage {

  protected readonly options = {
    config: `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux, NgFluxConfig } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux({
      // Loading Options
      loading: {
        showOnRouteNavigation: false,
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

  protected readonly usageExample = `
import { Component, inject } from '@angular/core';
import { NgFluxLoading } from '@ngflux/ngflux';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-data-processor',
  standalone: true,
  template: \`
    <button (click)="fetchHeavyData()">Process Network Request</button>
  \`
})
export class DataProcessorComponent {
  private readonly loader = inject(NgFluxLoading);
  private readonly http = inject(HttpClient);

  fetchHeavyData() {
    // 1. Manually show the overlay
    this.loader.start();

    this.http.get('https://api.example.com/heavy-payload')
      .pipe(
        // 2. Ensure the loader hides whether the request succeeds or fails
        finalize(() => this.loader.stop())
      )
      .subscribe({
        next: (data) => console.log('Data loaded successfully', data),
        error: (err) => console.error('Request failed', err)
      });
  }
}
  `;

  private readonly loading = inject(NgFluxLoading);

  showLoading() {
    const { loading } = this;

    loading.start();

    setTimeout(() => loading.stop(), 5000);
  }

}
