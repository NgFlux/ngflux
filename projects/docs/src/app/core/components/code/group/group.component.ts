import { NgComponentOutlet } from '@angular/common';
import { Component, computed, contentChildren, effect, inject, signal, ViewContainerRef } from '@angular/core';

import { DocCodeComponent } from '../code.component';

@Component({
  selector: 'doc-code-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.scss'],
  imports: [],
})
export class DocCodeGroupComponent {

  protected readonly blocks = contentChildren(DocCodeComponent);

  protected readonly view = inject(ViewContainerRef);

  protected readonly index = signal(0);

  protected readonly active = computed(() => {
    const index = this.index();
    const blocks = this.blocks();
    return blocks.at(index) ?? null;
  });

  constructor() {
    effect(() => {
      const index = this.index();

      const blocks = this.blocks();
      blocks.forEach(v => v.show.set(false));

      const block = blocks.at(index);
      if (block) block.show.set(true);
    });
  }

}
