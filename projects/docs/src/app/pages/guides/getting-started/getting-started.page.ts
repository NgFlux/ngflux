import { Component } from '@angular/core';

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

}
