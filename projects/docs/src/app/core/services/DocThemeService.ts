import { computed, Injectable, signal } from "@angular/core";
import { DocSection } from "../interfaces/Section";

@Injectable({ providedIn: 'root' })
export class DocThemeService {

  private readonly map = signal(new Map<string, DocSection>());
  readonly sections = computed(() => Array.from(this.map().values()));

  readonly attach = (id: string, section: DocSection) => this.map.update(v => {
    const map = new Map(v);
    map.set(id, section);
    return map;
  });

  readonly detach = (id: string) => this.map.update(v => {
    const map = new Map(v);
    map.delete(id);
    return map;
  });

}
