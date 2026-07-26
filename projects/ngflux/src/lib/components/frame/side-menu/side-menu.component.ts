import { Component, input } from "@angular/core";
import { Menu } from "../../../interfaces";

@Component({
  selector: 'ngf-frame-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.scss'],
  imports: [],
  host: {},
})
export class NgFluxFrameSideMenu {

  readonly menu = input.required<Menu[]>();

}
