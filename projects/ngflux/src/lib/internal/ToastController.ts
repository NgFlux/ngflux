import { computed, inject, Injectable, signal } from "@angular/core";

import { NGF_CONFIG, ToastOptions, ToastPlacement } from "../interfaces";

export type ToastMappedOptions = Required<ToastOptions>;

@Injectable({ providedIn: 'root' })
export class NgFluxToastController {

  private readonly config = inject(NGF_CONFIG);

  private readonly data = signal(new Map<ToastMappedOptions, any>());

  readonly map = computed(() => {
    const data = this.data();
    const map = new Map<ToastPlacement, ToastMappedOptions[]>();

    for (const [ item ] of data.entries()) {
      const key = item.placement;

      const entries = map.get(key) ?? [];
      entries.push(item);

      map.set(key, entries);
    }

    return map;
  });

  readonly add = (options: ToastMappedOptions) => this.data.update(v => {
    const data = new Map(v);
    data.set(options, true);
    return data;
  });

  readonly remove = (options: ToastMappedOptions) => this.data.update(v => {
    const data = new Map(v);
    data.delete(options);
    return data;
  });

}
