import type { Signal } from "@angular/core";

export type DocSection = {
  readonly name: Signal<string>;

  scrollIntoView(): void;
};
