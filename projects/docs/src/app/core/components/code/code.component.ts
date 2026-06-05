import { NgClass } from '@angular/common';
import { Component, computed, effect, ElementRef, HostBinding, inject, input, signal, viewChild } from '@angular/core';
import hljs from 'highlight.js';
import { DocCodeGroupComponent } from './group/group.component';

@Component({
  selector: 'doc-code',
  templateUrl: 'code.component.html',
  styleUrls: ['code.component.scss'],
  imports: [],
})
export class DocCodeComponent {

  protected readonly group = inject(DocCodeGroupComponent, { optional: true });

  readonly name = input.required();
  readonly language = input('');
  readonly code = input('');

  protected readonly formatted = computed(() => {
    const code = this.code().trim();
    const language = this.language();

    const data = hljs.highlight(code, { language });

    return data.value;
  });

  readonly show = signal(false);

  @HostBinding('class.hidden')
  get hidden() { return this.group && !this.show();  }

  @HostBinding('class.shadow')
  get shadow() { return !this.group;  }

}
