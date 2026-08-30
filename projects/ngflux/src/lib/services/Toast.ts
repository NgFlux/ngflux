import { inject, Injectable } from "@angular/core";

import { NGF_CONFIG, ToastOptions, ToastOptionsWithoutTheme } from "../interfaces";
import { NgFluxToastController, ToastMappedOptions } from "../internal";

@Injectable({ providedIn: 'root' })
export class NgFluxToast {

  private readonly config = inject(NGF_CONFIG);
  private readonly ctrl = inject(NgFluxToastController)

  show(options: ToastOptions) {
    const config = this.config.toast?.options;

    options.placement ??= config?.placement ?? 'topRight';
    options.showCloseButton ??= config?.showCloseButton ?? true;
    options.timeout ??= Math.max(config?.timeout ?? 10000, 0);
    options.theme ??= config?.theme ?? 'info';

    this.ctrl.add(options as ToastMappedOptions);
  }

  showDefault(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'default' };
    return this.show(opts);
  }

  showPrimary(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'primary' };
    return this.show(opts);
  }

  showSecondary(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'secondary' };
    return this.show(opts);
  }

  showError(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'error' };
    return this.show(opts);
  }

  showDanger(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'danger' };
    return this.show(opts);
  }

  showSuccess(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'success' };
    return this.show(opts);
  }

  showWarning(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'warning' };
    return this.show(opts);
  }

  showInfo(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'info' };
    return this.show(opts);
  }

  showLight(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'light' };
    return this.show(opts);
  }

  showDark(options: ToastOptionsWithoutTheme) {
    const opts: ToastOptions = { ...options, theme: 'dark' };
    return this.show(opts);
  }

}
