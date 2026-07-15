import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocMenu } from '@docs/core';

import { DocsTheme } from '../../themes/docs/docs.theme';

@Component({
  selector: 'app-features-page',
  templateUrl: 'features.page.html',
  styleUrls: ['features.page.scss'],
  imports: [
    DocsTheme,
    RouterOutlet,
  ],
})
export class FeaturesPage {

  readonly menu: DocMenu[] = [
    { text: 'Overview', href: './overview' },
    { text: 'Button', href: './button', description: 'A button designed with built-in support for icons and customizable themes.' },
    { text: 'Dialog', href: './dialog', description: 'A service that provides a modern, fully accessible alternative to native browser dialogs.' },
    { text: 'Loading', href: './loading', description: 'A service that provides a global, configurable loading overlay for your application.' },
    { text: 'Pagination', href: './pagination', description: 'Provides a robust pagination control interface that handles server-side data tracking...' },
    { text: 'Select', href: './select', description: '' },
  ];

}
