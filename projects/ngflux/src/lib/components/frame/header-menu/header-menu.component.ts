import { Component, input, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Menu } from "../../../interfaces";

@Component({
  selector: 'ngf-frame-header-menu',
  templateUrl: 'header-menu.component.html',
  styleUrls: ['header-menu.component.scss'],
  imports: [RouterLink],
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class NgFluxFrameHeaderMenu {

  readonly menu = input.required<Menu[]>();

  protected readonly open = signal(false);

  protected target = (item: Menu) => item.targetBlank ? '_blank' : null;

  protected toggle(e: PointerEvent) {
    e.stopPropagation();
    this.open.update(v => !v);
  }

  protected onDocumentClick(e: PointerEvent) {
    this.open.set(false);
  }

}
