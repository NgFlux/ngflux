import { Component, computed, signal } from "@angular/core";

import { FrameOptions, NgFluxFrame } from '@ngflux/ngflux';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-features-frame-page',
  templateUrl: 'frame.page.html',
  styleUrls: ['frame.page.scss'],
  imports: [
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    NgFluxFrame,
  ],
})
export class FeaturesFramePage {

  protected readonly options: FrameOptions = {
    title: signal(`Demo Frame`),
    icon: () => 'ngf-icon heart',
    headerMenu: () => [
      { text: 'Guides', href: '/home' },
      { text: 'Features', href: '/home' },
      { text: 'API Documentation', href: '/home' },
      { text: 'GitHub', icon: 'ngf-icon edit', href: 'https://github.com/NgFlux/ngflux', isExternal: true, targetBlank: true },
    ],

    sideMenu: () => [
      { text: 'Default Link', icon: 'ngf-icon edit', href: '/home' },

      {
        text: 'With Submenu',
        href: '/home',
        children: [
          { text: 'Child 1', href: '/child' },
          { text: 'Child 2', href: '/child' },
          { text: 'Child 3', href: '/child' },
        ],
      },

      { text: 'Custom Click Event', onClick: (e, item) => console.log(item.text), },

      { text: 'External Link', href: '/home', isExternal: true },
      { text: 'Target Blank', href: '/home', targetBlank: true },
    ],
  };

}
