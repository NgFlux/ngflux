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
    { text: 'Overview', href: './overview', description: '' },
    { text: 'Button', href: './button', description: '' },
    { text: 'Dialog', href: './dialog', description: '' },
    { text: 'Loading', href: './loading', description: '' },
    { text: 'Pagination', href: './pagination', description: '' },
  ];

}
