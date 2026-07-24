import { Component, computed, effect, inject, input, viewChild } from "@angular/core";

import { NgFluxTabContentDirective } from "../../directives";
import { TabGroupController } from "../../internal";

@Component({
  selector: 'ngf-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.scss'],
  imports: [
    NgFluxTabContentDirective,
  ],
})
export class NgFluxTab {

  private readonly ctrl = inject(TabGroupController);

  readonly label = input.required<string>();
  readonly navLabel = computed(() => this.label());

  readonly content = viewChild.required(NgFluxTabContentDirective);

  constructor() {
    const { ctrl } = this;

    effect(onCleanup => {
      ctrl.add(this);

      onCleanup(() => {
        ctrl.remove(this);
      });
    })
  }

}
