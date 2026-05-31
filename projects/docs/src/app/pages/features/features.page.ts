import { Component } from "@angular/core";

import { DocsTheme } from "../../themes/docs/docs.theme";
import { RouterOutlet } from "@angular/router";

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

  //

}
