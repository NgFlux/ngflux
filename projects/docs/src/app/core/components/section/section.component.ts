import { Component, effect, ElementRef, inject, input } from "@angular/core";

import { DocSection } from "../../interfaces/Section";
import { DocThemeService } from "../../services/DocThemeService";

@Component({
  selector: 'doc-section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.scss'],
  imports: [],
})
export class DocSectionComponent implements DocSection {

  private readonly service = inject(DocThemeService);
  private readonly ref = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly name = input('');

  constructor() {
    const { service } = this;

    effect((onCleanup) => {
      const name = this.name().toLowerCase();

      if (name) {
        service.attach(name, this);

        onCleanup(() => {
          service.detach(name);
        });
      }
    });
  }

  scrollIntoView() {
    const { ref: { nativeElement } } = this;

    nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

}
