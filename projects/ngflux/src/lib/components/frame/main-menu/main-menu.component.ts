import { Component, input } from "@angular/core";
import { Menu } from "../../../interfaces";

@Component({
  selector: 'ngf-frame-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss'],
  imports: [],
  host: {},
})
export class NgFluxFrameMainMenu {

  readonly menu = input.required<Menu[]>();

}
