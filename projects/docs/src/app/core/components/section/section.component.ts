import { Component, computed, effect, ElementRef, HostBinding, inject, input, signal } from '@angular/core';

import { DocSection } from '../../interfaces/Section';
import { DocsTheme } from '../../../themes/docs/docs.theme';

@Component({
  selector: 'doc-section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.scss'],
  imports: [],
})
export class DocSectionComponent implements DocSection {

  private readonly ref = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly theme = inject(DocsTheme, { optional: true });
  protected readonly parent = inject(DocSectionComponent, { optional: true, skipSelf: true });

  readonly name = input('');
  readonly subtitle = input('');

  @HostBinding('class.child')
  get isChild() { return !!this.parent }

  private readonly sub = signal(new Map<DocSection, string>());
  readonly children = computed(() => Array.from(this.sub().keys()));

  constructor() {
    const { theme, parent } = this;

    effect((onCleanup) => {
      const name = this.name().trim();
      if (!name) return;

      if (parent) {
        parent.attach(this);
        onCleanup(() => parent.detach(this));
      } else if (theme) {
        theme.attach(this);
        onCleanup(() => theme.detach(this));
      }
    });
  }

  private readonly attach = (section: DocSection) => this.sub.update(v => {
    const map = new Map(v);
    map.set(section, section.name());
    return map;
  });

  private detach = (section: DocSection) => this.sub.update(v => {
    const map = new Map(v);
    map.delete(section);
    return map;
  });

  scrollIntoView() {
    const { ref: { nativeElement } } = this;

    nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

}
