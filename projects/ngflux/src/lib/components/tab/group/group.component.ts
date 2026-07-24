import { Component, inject, input } from "@angular/core";

import { TabGroupController } from "../../../internal";
import { NgFluxTabNavDirective } from "../../../directives";

import { NgFluxTabNavbar } from "../navbar/navbar.component";
import { NgFluxTabPanel } from "../panel/panel.component";

@Component({
  selector: 'ngf-tab-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.scss'],
  providers: [TabGroupController],
  imports: [
    NgFluxTabNavbar,
    NgFluxTabNavDirective,
    NgFluxTabPanel
],
})
export class NgFluxTabGroup {

  protected readonly ctrl = inject(TabGroupController);

  readonly selectedIndex = input(0);

  protected readonly showTabs: boolean = false;

}
