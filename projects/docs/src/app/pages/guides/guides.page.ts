import { Component } from "@angular/core";

import { DocsTheme } from "../../themes/docs/docs.theme";
import { RouterOutlet } from "@angular/router";

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

  //

}
