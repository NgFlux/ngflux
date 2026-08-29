import { computed, Directive, input, model } from "@angular/core";

import { NgFluxTheme } from "../interfaces";

@Directive({
  selector: '[ngfTheme]',
  host: {
    '[class]': 'className()',
  },
})
export class NgFluxThemeDirective {

  readonly ngfTheme = model<NgFluxTheme>('default');

  protected className = computed(() => `ngf-theme-${this.ngfTheme()}`);

}
