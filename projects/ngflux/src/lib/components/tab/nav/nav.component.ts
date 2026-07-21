import { Component, computed, effect, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { TabNavController } from "../../../internal";

@Component({
  selector: 'ngf-tab-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss'],
  imports: [RouterLink],
  host: {
    '[class.active]': 'active()',
    '(click)': 'activate($event)',
  },
})
export class NgFluxTabNav {

  protected readonly ctrl = inject(TabNavController);

  readonly icon = input<string>();
  readonly link = input<string | string[]>();

  readonly href = computed(() => this.link());

  protected readonly active = computed(() => this.ctrl.active() === this);

  constructor() {
    const { ctrl } = this;

    effect((onCleanup) => {
      ctrl.add(this);

      onCleanup(() => {
        ctrl.remove(this);
      });
    });
  }

  protected activate(e: PointerEvent) {
    this.ctrl.activate(this);
  }

}
