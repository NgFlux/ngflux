import { Component, input } from "@angular/core";

import { DocMenu } from "../../interfaces/Menu";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'doc-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
})
export class DocMenuComponent {

  readonly data = input.required<DocMenu[]>();

  protected readonly target = (item: DocMenu) => item.targetBlank ? '_blank' : '_self';

}
