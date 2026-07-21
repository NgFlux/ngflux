import { Injectable, linkedSignal, signal } from "@angular/core";

import type { NgFluxTabNav } from "../components";

@Injectable()
export class TabNavController {

  private readonly navs = signal(new Map<NgFluxTabNav, string | string[] | undefined>());

  private readonly selected = linkedSignal({
    source: this.navs,
    computation: (src, prev): NgFluxTabNav | null => {
      const value: NgFluxTabNav | null = prev?.value ?? null;
      if (value && src.has(value)) return value;

      const navs = Array.from(src.keys());
      return navs.at(0) ?? null;
    }
  });

  readonly active = this.selected.asReadonly();

  activate(nav: NgFluxTabNav) {
    const navs = this.navs();
    if (!navs.has(nav)) return;

    this.selected.set(nav);
  }

  add(nav: NgFluxTabNav) {
    this.navs.update(v => {
      const map = new Map(v);
      map.set(nav, nav.href());
      return map;
    });
  }

  remove(nav: NgFluxTabNav) {
    this.navs.update(v => {
      if (!v.has(nav)) return v;

      const map = new Map(v);
      map.delete(nav);

      return map;
    });
  }

}
