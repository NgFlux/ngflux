import { computed, inject, Injectable } from "@angular/core";
import { NgFlexLoadingInternal } from "../internal/Loading";

@Injectable({ providedIn: 'root' })
export class NgFlexLoading {

  private readonly internal = inject(NgFlexLoadingInternal);

  readonly data = computed(() => this.internal.entry());

  get isLoading() { return this.internal.isLoading(); }

  start(text: string = '') {
    this.internal.start(text);
  }

  stop() {
    this.internal.stop();
  }

}
