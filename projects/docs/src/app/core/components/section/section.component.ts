import { Component, effect, ElementRef, inject, input } from '@angular/core';
import slugify from 'slugify';

import { DocSection } from '../../interfaces/Section';
import { DocsTheme } from '../../../themes/docs/docs.theme';

@Component({
  selector: 'doc-section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.scss'],
  imports: [],
})
export class DocSectionComponent implements DocSection {

  private readonly theme = inject(DocsTheme, { optional: true });
  private readonly ref = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly name = input('');

  constructor() {
    const { theme } = this;

    effect((onCleanup) => {
      const name = slugify(this.name());

      if (name) {
        theme?.attach(name, this);

        onCleanup(() => {
          theme?.detach(name);
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
