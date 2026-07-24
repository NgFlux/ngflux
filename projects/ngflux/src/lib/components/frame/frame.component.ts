import { Component, input } from "@angular/core";

import { Menu } from "../../interfaces";

@Component({
  selector: 'ngf-frame',
  templateUrl: 'frame.component.html',
  styleUrls: ['frame.component.scss'],
  imports: [],
  host: {
    '[attr.title]': 'null',
  },
})
export class NgFluxFrame {

  readonly title = input('');
  readonly menu = input<Menu[]>([]);

}
