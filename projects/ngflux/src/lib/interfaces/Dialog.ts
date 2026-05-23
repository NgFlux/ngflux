import { InjectionToken, Injector, Signal, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";

import type { NgFluxDialogRef } from "../services/DialogRef";
import type { ButtonDirection, ButtonOptions, ButtonSize, ButtonTheme } from "./Button";

export type NgFluxDialogRoot = {
  viewContainer: Signal<ViewContainerRef>;
  injector: Injector;
}

export type NgFluxDialogConfig = {
  closeOnEsc?: boolean;
  closeOnBackBtn?: boolean;
  backdropClose?: boolean;
  closeBtn?: boolean;
  data?: any
};

export type NgFluxDialogCommand<T = any> = {
  name: string;
  value?: T;
};

export const NGF_DIALOG_DATA = new InjectionToken<any>('ngf-dialog-data');

export type NgFluxDialogEvents<T = any> = {
  readonly closing: Observable<T | null>;
  readonly closed: Observable<T | null>;
};

export type NgFluxDialogButtonObj<T = any> = ButtonOptions & {
  onClick?: (e: MouseEvent, btn: NgFluxDialogButton<T>, dialogRef: NgFluxDialogRef<T>) => void;
  disabled?: () => boolean;
};

export type NgFluxDialogButton<T = any> = 'flex' | NgFluxDialogButtonObj<T>;

export type NgFluxDialogAlertOptions = {
  title: string;
  content: string;
  buttons?: NgFluxDialogButton<boolean>[];
};

export type NgFluxDialogConfirmOptions = {
  title: string;
  content: string;
  okayButton?: NgFluxDialogButtonObj;
  cancelButton?: NgFluxDialogButtonObj;
};

export type NgFluxDialogPromptOptions = {
  title: string;
  content: string;
  submitButton?: NgFluxDialogButtonObj;
  cancelButton?: NgFluxDialogButtonObj;
};
