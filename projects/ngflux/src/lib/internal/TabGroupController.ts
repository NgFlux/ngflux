import { computed, Injectable, signal } from "@angular/core";

import type { NgFluxTab } from "../components";

@Injectable()
export class TabGroupController {

  private readonly map = signal(new Map<NgFluxTab, any>());
  readonly tabs = computed(() => Array.from(this.map().keys()));

  add(nav: NgFluxTab) {
    this.map.update(v => {
      const map = new Map(v);
      map.set(nav, true);

      return map;
    });
  }

  remove(nav: NgFluxTab) {
    this.map.update(v => {
      if (!v.has(nav)) return v;

      const map = new Map(v);
      map.delete(nav);

      return map;
    });
  }

}
