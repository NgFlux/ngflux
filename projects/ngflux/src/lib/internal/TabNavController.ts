import { computed, effect, Injectable, linkedSignal, signal, untracked } from "@angular/core";

import type { NgFluxTabContentDirective, NgFluxTabNavDirective } from "../directives";

@Injectable()
export class TabNavController {

  private readonly navs = signal(new Map<NgFluxTabNavDirective, any>());

  private readonly selected = linkedSignal({
    source: this.navs,
    computation: (src, prev): NgFluxTabNavDirective | null => {
      const value: NgFluxTabNavDirective | null = prev?.value ?? null;
      if (value && src.has(value)) return value;

      const navs = Array.from(src.keys());
      return navs.at(0) ?? null;
    }
  });

  readonly active = this.selected.asReadonly();
  readonly activeContent = computed(() => this.active()?.navContent());

  activate(nav: NgFluxTabNavDirective) {
    const navs = this.navs();
    if (!navs.has(nav)) return;

    this.selected.set(nav);
  }

  add(nav: NgFluxTabNavDirective) {
    this.navs.update(v => {
      const map = new Map(v);
      map.set(nav, true);

      return map;
    });
  }

  remove(nav: NgFluxTabNavDirective) {
    this.navs.update(v => {
      if (!v.has(nav)) return v;

      const map = new Map(v);
      map.delete(nav);

      return map;
    });
  }

}
