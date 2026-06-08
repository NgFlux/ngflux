import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocMenu } from '@docs/core';

import { DocsTheme } from '../../themes/docs/docs.theme';

const menu: DocMenu[] = ([
  { text: 'ButtonOptions', href: './ButtonOptions' },
  { text: 'DialogAlertOptions', href: './DialogAlertOptions' },
  { text: 'DialogConfirmOptions', href: './DialogConfirmOptions' },
  { text: 'DialogPromptOptions', href: './DialogPromptOptions' },
  { text: 'PaginationTransformer', href: './PaginationTransformer' },
] as DocMenu[]).toSorted((a, b) => {
  return a.text.localeCompare(b.text, undefined, { sensitivity: 'base' });
});

@Component({
  selector: 'app-api-page',
  templateUrl: 'api.page.html',
  styleUrls: ['api.page.scss'],
  imports: [
    DocsTheme,
    RouterOutlet,
  ],
})
export class ApiPage {

  protected menu: DocMenu[] = [
    { text: 'Overview', href: './overview' },
    ...menu,
  ];

}
