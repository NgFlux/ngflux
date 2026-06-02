import { computed, Injectable, signal } from "@angular/core";

import type { DocSectionComponent } from "../components/section/section.component";

@Injectable({ providedIn: 'root' })
export class DocThemeService {

  private readonly map = signal(new Map<string, DocSectionComponent>());
  readonly sections = computed(() => Array.from(this.map().values()));

  readonly attach = (section: DocSectionComponent) => this.map.update(v => {
    const map = new Map(v);
    map.set(section.id(), section);
    return map;
  });

  readonly detach = (section: DocSectionComponent) => this.map.update(v => {
    const map = new Map(v);
    map.delete(section.id());
    return map;
  });

}
