import { computed, inject, Injectable } from "@angular/core";
import { NgFluxLoadingInternal } from "../internal/Loading";

@Injectable({ providedIn: 'root' })
export class NgFluxLoading {

  private readonly internal = inject(NgFluxLoadingInternal);

  readonly data = computed(() => this.internal.entry());
  readonly isLoading = computed(() => this.internal.isLoading());

  start(text: string = '') {
    this.internal.start(text);
  }

  stop() {
    this.internal.stop();
  }

}
