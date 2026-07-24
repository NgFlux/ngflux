import { Component, effect, inject, input, output } from "@angular/core";

import { NgFluxTabPanel } from "../panel/panel.component";

import { TabNavController } from "../../../internal";
import { NgFluxTabContentDirective } from "../../../directives";

@Component({
  selector: 'ngf-tab-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  providers: [TabNavController],
  imports: [],
})
export class NgFluxTabNavbar {

  private readonly ctrl = inject(TabNavController);

  readonly panel = input<NgFluxTabPanel>();
  readonly selectedIndex = input(0);

  constructor() {
    const { ctrl } = this;

    effect(() => {
      const index = this.selectedIndex();
      ctrl.selectedIndex.set(index);
    });

    effect(() => {
      const panel = this.panel();
      const content = ctrl.activeContent();
      panel?.setContent(content?.templateRef);
    });
  }

}
