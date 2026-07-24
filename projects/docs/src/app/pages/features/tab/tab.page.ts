import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgFluxTabNavbar, NgFluxTabNavDirective, NgFluxTabGroup, NgFluxTab } from '@ngflux/ngflux';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-features-tab-page',
  templateUrl: 'tab.page.html',
  styleUrls: ['tab.page.scss'],
  imports: [
    FormsModule,
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    NgFluxTabNavbar,
    NgFluxTabNavDirective,
    NgFluxTabGroup,
    NgFluxTab,
],
})
export class FeaturesTabPage {

  protected readonly pin = signal('');

  protected readonly usage = `
import { Component } from '@angular/core';
import { NgFluxButton } from '@ngflux/ngflux';

@Component({
  imports: [NgFluxButton],
  template: \`
    <ngf-button theme="primary" size="md">
      Click Me
    </ngf-button>
  \`
})
export class MyComponent {}
  `;

}
