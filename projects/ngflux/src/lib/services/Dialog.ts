import { inject, Injectable } from "@angular/core";

import { NgFluxDialogInstance } from "./DialogInstance";
import { NgFluxAlertDialog } from "../components/dialog/boxes/alert/alert.dialog";
import { NgFluxConfirmDialog } from "../components/dialog/boxes/confirm/confirm.dialog";
import { NgFluxPromptDialog } from "../components/dialog/boxes/prompt/prompt.dialog";

import { NgFluxDialogInternal } from "../internal";

import {
  NgFluxComponent,
  NgFluxDialogAlertOptions,
  NgFluxDialogButton,
  NgFluxDialogConfig,
  NgFluxDialogConfirmOptions,
  NgFluxDialogEvents,
  NgFluxDialogPromptOptions,
} from "../interfaces";

@Injectable({ providedIn: 'root' })
export class NgFluxDialog {

  private readonly internal = inject(NgFluxDialogInternal);

  open<T = any>(component: NgFluxComponent<any>, config?: NgFluxDialogConfig): NgFluxDialogEvents<T> {
    config ??= {};
    config.backdropClose ??= true;
    config.closeBtn ??= true;
    config.closeOnBackBtn ??= true;
    config.closeOnEsc ??= true;

    const { internal } = this;
    const root = internal.root();

    if (!root) throw new Error(
      '"ngf-dialog-root" component not found. ' +
      'Use "<ngf-root></ngf-root>" in your root component to enable all NgFlux features or ' +
      'add "<ngf-dialog-root></ngf-dialog-root>" to your root component to enable the NgFluxDialog feature.'
    );

    const onClosed = (ins: NgFluxDialogInstance<T>) => {
      internal.remove(ins);
    };

    const instance = new NgFluxDialogInstance<T>(
      root.viewContainer(),
      component,
      root.injector,
      onClosed,
      config
    );

    internal.add(instance);

    return instance.events;
  }

  readonly closeAll = () => this.internal.closeAll();

  alert(title: string, content: string, buttons?: NgFluxDialogButton[]) {
    const data: NgFluxDialogAlertOptions = { title, content, buttons };

    const dialog = this.open<boolean>(NgFluxAlertDialog, {
      closeOnBackBtn: false,
      backdropClose: false,
      closeOnEsc: false,
      data
    });

    return dialog.closed;
  }

  success(title: string, message: string, buttons?: NgFluxDialogButton[]) {
    message = `<div class="mbi-success">${message}</div>`;
    return this.alert(title, message, buttons);
  }

  error(title: string, message: string, buttons?: NgFluxDialogButton[]) {
    message = `<div class="mbi-error">${message}</div>`;
    return this.alert(title, message, buttons);
  }

  confirm(data: NgFluxDialogConfirmOptions) {
    const dialog = this.open(NgFluxConfirmDialog, {
      closeOnBackBtn: false,
      backdropClose: false,
      closeOnEsc: false,
      data
    });

    return dialog.closed;
  }

  prompt(data: NgFluxDialogPromptOptions) {
    const dialog = this.open(NgFluxPromptDialog, {
      closeOnBackBtn: false,
      backdropClose: false,
      closeOnEsc: false,
      data
    });

    return dialog.closed;
  }

}
