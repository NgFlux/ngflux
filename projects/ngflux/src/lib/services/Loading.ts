import { computed, inject, Injectable } from "@angular/core";
import { NgFluxLoadingInternal } from "../internal/Loading";

@Injectable({ providedIn: 'root' })
export class NgFluxLoading {

  private readonly internal = inject(NgFluxLoadingInternal);

  private readonly root = this.internal.rootRef.instance;

  readonly data = computed(() => this.root.entry());
  readonly isLoading = computed(() => this.root.isLoading());

  readonly start = (text: string = '') => this.root.start(text);
  readonly stop = () => this.root.stop();

}
