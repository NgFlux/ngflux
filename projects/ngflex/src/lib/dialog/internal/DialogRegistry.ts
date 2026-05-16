import { computed, effect, Injectable, signal } from "@angular/core";

import { NgFlexDialogInstance } from "../services/DialogInstance";

@Injectable({ providedIn: 'root' })
export class NgFlexDialogRegistry {

  private readonly list = signal<NgFlexDialogInstance[]>([]);

  readonly count = computed(() => this.list().length);
  readonly isOpen = computed(() => this.count() > 0);

  readonly active = computed(() => {
    const entries = this.cloneList();
    if (!entries.length) return null;

    const lastIndex = entries.length - 1;
    return entries[lastIndex];
  });

  constructor() {
    const body = document.querySelector('body');

    effect(() => {
      const isOpen = this.isOpen();
      body?.classList.toggle('ngf-dialog-open', isOpen);
    });

    window.addEventListener('popstate', e => {
      const active = this.active();
      if (!active) return;

      history.forward();

      const config = active.config;

      if (config.closeOnBackBtn) {
        active.send({ name: 'backButton.close' });
      }
    });
  }

  private readonly cloneList = () => Array.from(this.list());

  private readonly indexOf = (item: NgFlexDialogInstance) => {
    const entries = this.list();
    return entries.indexOf(item);
  }

  readonly focus = () => {
    const item = this.active();
    item?.focus();
  }

  readonly add = (...items: NgFlexDialogInstance[]) => {
    const entries = this.cloneList();

    entries.push(...items);

    this.list.set(entries);

    // ====================

    history.pushState(null, '', location.href);
  }

  readonly remove = (item: NgFlexDialogInstance) => {
    history.back();

    const entries = this.cloneList();

    const index = this.indexOf(item);
    entries.splice(index, 1);

    this.list.set(entries);
  }

  readonly closeAll = () => {
    const entries = this.cloneList();

    while (entries.length) {
      const instance = entries.pop();
      instance?.close(false);
    }

    this.list.set(entries);
  }

  readonly clear = () => {
    this.list.set([]);
  }

}
