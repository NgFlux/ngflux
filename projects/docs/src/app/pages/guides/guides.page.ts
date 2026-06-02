import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DocMenu } from "@docs/core";

import { DocsTheme } from "../../themes/docs/docs.theme";

@Component({
  selector: 'app-guides-page',
  templateUrl: 'guides.page.html',
  styleUrls: ['guides.page.scss'],
  imports: [
    DocsTheme,
    RouterOutlet,
  ],
})
export class GuidesPage {

  protected menu: DocMenu[] = [
    { text: 'Getting Started', href: './getting-started' },
    { text: 'Theming NgFlux', href: './theming' },
  ];

}
