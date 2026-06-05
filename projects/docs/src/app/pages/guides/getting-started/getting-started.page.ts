import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import {
  DocCodeComponent,
  DocCodeGroupComponent,
  DocSectionComponent,
} from '@docs/core';

@Component({
  selector: 'app-guides-getting-started-page',
  templateUrl: 'getting-started.page.html',
  styleUrls: ['getting-started.page.scss'],
  imports: [
    RouterLink,
    DocSectionComponent,
    DocCodeComponent,
    DocCodeGroupComponent,
],
})
export class GuidesGettingStartedPage {

  protected readonly provideCode = `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux(),
    ...
  ],
};
  `;

  protected readonly rootCodeTS = `
import { Component } from '@angular/core';
import { NgFluxRootComponent } from '@ngflux/ngflux';

@Component({
  ...
  imports: [
    ...
    NgFluxRootComponent,
    ...
  ],
})
export class App {
  ...
}
  `;

  protected readonly rootCodeHTML = `
<ngf-root>
  <router-outlet></router-outlet>
</ngf-root>

  `;

}
