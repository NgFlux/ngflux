import type { Signal } from "@angular/core";

export type DocSection = {
  readonly name: Signal<string>;
  readonly children: Signal<DocSection[]>;

  scrollIntoView(): void;
};
