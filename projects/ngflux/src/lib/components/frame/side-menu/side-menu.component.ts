import { Component, computed, inject, input, Signal, signal } from "@angular/core";
import { isActive, Router, RouterLink, RouterLinkActive } from "@angular/router";

import { Menu } from "../../../interfaces";

@Component({
  selector: 'ngf-frame-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  host: {
    '[class.has-parent]': 'hasParent()',
  },
})
export class NgFluxFrameSideMenu {

  private readonly router = inject(Router, { optional: true });

  private readonly parent = inject(NgFluxFrameSideMenu, {
    optional: true,
    skipSelf: true,
  });

  readonly menu = input.required<Menu[]>();

  protected readonly expanded = signal(new Map<Menu, boolean>());

  protected readonly map = computed(() => {
    const { router } = this;
    const menu = this.menu();
    const map = new Map<Menu, () => boolean>();

    for (let item of menu) {
      const active = (router && item.href && !item.isExternal) ? isActive(item.href, router) : () => false;
      map.set(item, active);
    }

    return map;
  });

  protected readonly hasParent = computed(() => !!this.parent);

  protected target = (item: Menu) => item.targetBlank ? '_blank' : null;

  protected isExpanded(item: Menu) {
    return this.expanded().has(item);
  }

  protected isActive(item: Menu) {
    return this.map().get(item)?.() ?? false;
  }

  protected toggle(e: PointerEvent, item: Menu) {
    e.preventDefault();
    e.stopPropagation();

    this.expanded.update(v => {
      const map = new Map(v);

      if (!map.has(item)) {
        map.set(item, true);
      } else {
        map.delete(item);
      }

      return map;
    });
  }

}
