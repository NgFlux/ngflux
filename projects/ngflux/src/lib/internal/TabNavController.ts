import { computed, effect, Injectable, linkedSignal, signal } from "@angular/core";

import type { NgFluxTabContentDirective, NgFluxTabNavDirective } from "../directives";

@Injectable()
export class TabNavController {

  private readonly map = signal(new Map<NgFluxTabNavDirective, any>());
  readonly navs = computed(() => Array.from(this.map().keys()));

  private readonly selected = linkedSignal({
    source: () => ({
      navs: this.navs(),
      selectedIndex: this.selectedIndex(),
    }),
    computation: (src, prev): NgFluxTabNavDirective | null => {
      const { navs, selectedIndex } = src;
      const value: NgFluxTabNavDirective | null = prev?.value ?? null;

      let index = Math.min(Math.max(selectedIndex, 0), navs.length - 1);
      return navs.find(v => v === value) ?? navs.at(index) ?? null;
    }
  });

  readonly selectedIndex = signal(0);

  readonly active = this.selected.asReadonly();
  readonly activeContent = computed(() => this.active()?.navContent());

  activate(nav: NgFluxTabNavDirective) {
    const map = this.map();
    if (!map.has(nav)) return;

    this.selected.set(nav);
  }

  add(nav: NgFluxTabNavDirective) {
    this.map.update(v => {
      const map = new Map(v);
      map.set(nav, true);

      return map;
    });
  }

  remove(nav: NgFluxTabNavDirective) {
    this.map.update(v => {
      if (!v.has(nav)) return v;

      const map = new Map(v);
      map.delete(nav);

      return map;
    });
  }

}
