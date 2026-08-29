import { Component, computed, effect, inject, input } from "@angular/core";

import { NgFluxToastController, ToastMappedOptions } from "../../internal";
import { NgFluxThemeDirective } from "../../directives/theme.directive";

@Component({
  selector: 'ngf-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss'],
  imports: [],
  hostDirectives: [
    NgFluxThemeDirective,
  ],
})
export class NgFluxToastComponent {

  private readonly ctrl = inject(NgFluxToastController);
  private readonly theme = inject(NgFluxThemeDirective);

  readonly options = input.required<ToastMappedOptions>();

  constructor() {
    const { ctrl } = this;

    effect(() => {
      const options = this.options();
      this.theme.ngfTheme.set(options.theme);
    });

    effect(onCleanup => {
      const options = this.options();
      if (!options.timeout) return;

      const timeout = setTimeout(() => ctrl.remove(options), options.timeout);
      onCleanup(() => clearTimeout(timeout));
    });
  }

  protected close() {
    const options = this.options();
    this.ctrl.remove(options);
  }

}
