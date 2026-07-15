import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFluxSelect, SelectTransformer } from '@ngflux/ngflux';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

type Entry = {
  name: string;
  key: string;
};

@Component({
  selector: 'app-features-select-page',
  templateUrl: 'select.page.html',
  styleUrls: ['select.page.scss'],
  imports: [
    FormsModule,
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    NgFluxSelect,
  ],
})
export class FeaturesSelectPage {

  protected readonly entries: Entry[] = [
    { name: 'Abia', key: 'abia' },
    { name: 'Adamawa', key: 'adamawa' },
    { name: 'Akwa-ibom', key: 'akwa-ibom' },
    { name: 'Anambra', key: 'anambra' },
    { name: 'Bauchi', key: 'bauchi' },
    { name: 'Benue', key: 'benue' },
    { name: 'Borno', key: 'borno' },
    { name: 'Delta', key: 'delta' },
  ];

  protected readonly transform: SelectTransformer<Entry> = {
    getLabel: item => item.name,
    getValue: item => item.key,
  };

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
