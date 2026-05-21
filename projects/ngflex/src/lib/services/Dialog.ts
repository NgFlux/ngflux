import { inject, Injectable } from "@angular/core";

import { NgFlexDialogInstance } from "./DialogInstance";
import { NgFlexAlertDialog } from "../components/dialog/boxes/alert/alert.dialog";
import { NgFlexConfirmDialog } from "../components/dialog/boxes/confirm/confirm.dialog";
import { NgFlexPromptDialog } from "../components/dialog/boxes/prompt/prompt.dialog";

import { NgFlexDialogInternal } from "../internal";

import {
  NgFlexComponent,
  NgFlexDialogAlertOptions,
  NgFlexDialogButton,
  NgFlexDialogConfig,
  NgFlexDialogConfirmOptions,
  NgFlexDialogEvents,
  NgFlexDialogPromptOptions,
} from "../interfaces";

@Injectable({ providedIn: 'root' })
export class NgFlexDialog {

  private readonly internal = inject(NgFlexDialogInternal);

  open<T = any>(component: NgFlexComponent<any>, config?: NgFlexDialogConfig): NgFlexDialogEvents<T> {
    config ??= {};
    config.backdropClose ??= true;
    config.closeBtn ??= true;
    config.closeOnBackBtn ??= true;
    config.closeOnEsc ??= true;

    const { internal } = this;
    const root = internal.root();

    if (!root) throw new Error(
      '"ngf-dialog-root" component not found. ' +
      'Use "<ngf-root></ngf-root>" in your root component to enable all NgFlex features or ' +
      'add "<ngf-dialog-root></ngf-dialog-root>" to your root component to enable the NgFlexDialog feature.'
    );

    const onClosed = (ins: NgFlexDialogInstance<T>) => {
      internal.remove(ins);
    };

    const instance = new NgFlexDialogInstance<T>(
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

  alert(title: string, content: string, buttons?: NgFlexDialogButton[]) {
    const data: NgFlexDialogAlertOptions = { title, content, buttons };

    const dialog = this.open<boolean>(NgFlexAlertDialog, {
      closeOnBackBtn: false,
      backdropClose: false,
      closeOnEsc: false,
      data
    });

    return dialog.closed;
  }

  success(title: string, message: string, buttons?: NgFlexDialogButton[]) {
    message = `<div class="mbi-success">${message}</div>`;
    return this.alert(title, message, buttons);
  }

  error(title: string, message: string, buttons?: NgFlexDialogButton[]) {
    message = `<div class="mbi-error">${message}</div>`;
    return this.alert(title, message, buttons);
  }

  confirm(data: NgFlexDialogConfirmOptions) {
    const dialog = this.open(NgFlexConfirmDialog, {
      closeOnBackBtn: false,
      backdropClose: false,
      closeOnEsc: false,
      data
    });

    return dialog.closed;
  }

  prompt(data: NgFlexDialogPromptOptions) {
    const dialog = this.open(NgFlexPromptDialog, {
      closeOnBackBtn: false,
      backdropClose: false,
      closeOnEsc: false,
      data
    });

    return dialog.closed;
  }

}
