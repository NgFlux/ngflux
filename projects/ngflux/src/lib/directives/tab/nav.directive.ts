import { computed, Directive, effect, inject, input } from "@angular/core";
import { isActive, Router, RouterLink, RouterLinkActive } from "@angular/router";

import { TabNavController } from "../../internal";
import { toSignal } from "@angular/core/rxjs-interop";
import { NgFluxTabPanel } from "../../components";
import { NgFluxTabContentDirective } from "./content.directive";

@Directive({
  selector: '[ngfTabNav]',
  hostDirectives: [
    { directive: RouterLink, inputs: ['routerLink: link'] },
    RouterLinkActive,
  ],
  host: {
    '[class.ngf-tab-nav]': 'true',
    '[class.active]': 'active()',
    '(click)': 'activate($event)',
  },
})
export class NgFluxTabNavDirective {

  private readonly routerLink = inject(RouterLink);
  private readonly routerLinkActive = inject(RouterLinkActive);

  protected readonly ctrl = inject(TabNavController);

  readonly content = input<NgFluxTabContentDirective>();
  readonly navContent = computed(() => this.content());

  private readonly routeActive = toSignal(this.routerLinkActive.isActiveChange, { initialValue: false });

  protected readonly active = computed(() => this.ctrl.active() === this);

  constructor() {
    const { ctrl } = this;

    effect((onCleanup) => {
      ctrl.add(this);

      onCleanup(() => {
        ctrl.remove(this);
      });
    });

    effect(() => {
      const active = this.routeActive();
      if (active) ctrl.activate(this);
    });
  }

  protected activate(e?: PointerEvent) {
    const { ctrl, routerLink, routeActive } = this;
    if (routerLink.href !== null && !routeActive()) return;
    ctrl.activate(this);
  }

}
