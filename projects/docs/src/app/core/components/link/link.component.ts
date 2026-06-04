import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocMenu } from '../../interfaces/Menu';

@Component({
  selector: 'doc-link',
  templateUrl: 'link.component.html',
  styleUrls: ['link.component.scss'],
  imports: [RouterLink],
})
export class DocLinkComponent {

  readonly data = input.required<DocMenu>();

  protected readonly target = computed(() => (this.data().targetBlank ? '_blank' : '_self'));

}
