import { computed, Injectable, signal } from "@angular/core";
import { NgFluxLoadingEntry } from "../interfaces/Loading";

@Injectable({ providedIn: 'root' })
export class NgFluxLoadingInternal {

  private readonly entries = signal<NgFluxLoadingEntry[]>([]);

  readonly count = computed(() => this.entries().length);

  readonly isLoading = computed(() => this.count() > 0);

  readonly entry = computed(() => {
    const entries = this.entries();
    return entries.at(entries.length - 1);
  });

  readonly start = (text: string = '') => this.entries.update(v => {
    const entries = Array.from(v);
    entries.push({ text });
    return entries;
  });

  readonly stop = () => this.entries.update(v => {
    const entries = Array.from(v);
    entries.pop();
    return entries;
  });

}
