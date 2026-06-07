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

  protected menu: DocMenu[] = [
    { text: 'Overview', href: './overview' },
    { text: 'Button', href: './button' },
    { text: 'Dialog', href: './dialog' },
    { text: 'Loading', href: './loading' },
    { text: 'Pagination', href: './pagination' },
  ];

}
