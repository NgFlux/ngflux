import { Injectable, signal } from "@angular/core";

import type { NgFluxTabNav } from "../components";

@Injectable()
export class TabNavController {

  private readonly navs = signal(new Map<NgFluxTabNav, any>());
  private readonly selected = signal<NgFluxTabNav | null>(null);

  readonly active = this.selected.asReadonly();

  activate(nav: NgFluxTabNav) {
    const navs = this.navs();
    if (!navs.has(nav)) return;

    this.selected.set(nav);
  }

  add(nav: NgFluxTabNav) {
    this.navs.update(v => {
      const map = new Map(v);
      map.set(nav, true);
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
