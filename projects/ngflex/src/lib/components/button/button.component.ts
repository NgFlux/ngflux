import { Component, computed, ElementRef, HostBinding, inject, input } from "@angular/core";
import { NgClass } from "@angular/common";

import { ButtonDirection, ButtonSize, ButtonTheme, ButtonType } from "../../interfaces";

@Component({
  selector: 'ngf-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  imports: [NgClass],
})
export class NgFlexButton {

  private readonly ref: ElementRef<HTMLElement> = inject(ElementRef);

  readonly icon = input<string>();
  readonly theme = input<ButtonTheme>();
  readonly type = input<ButtonType>();
  readonly size = input<ButtonSize>();
  readonly direction = input<ButtonDirection>();

  readonly block = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  readonly btnClassNames = computed(() => {
    const names: string[] = [];

    const direction = this.direction() ?? 'normal';
    if (direction === 'reversed') names.push(direction);

    return names;
  });

  readonly classNames = computed(() => [
    this.theme() ?? 'default',
    this.size() ?? 'md',
  ].join(' '));

  @HostBinding('class')
  get bindClass() { return this.classNames(); }

  @HostBinding('class.block')
  get isBlock() { return this.block(); }

  @HostBinding('class.disabled')
  get isDisabled() { return this.disabled(); }

  constructor() {
    const { ref: { nativeElement } } = this;
    nativeElement.tabIndex = 1;
  }

}
