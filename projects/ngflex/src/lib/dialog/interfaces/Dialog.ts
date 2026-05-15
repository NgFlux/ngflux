import { InjectionToken, Injector, Signal, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";

import type { NgFlexDialogRef } from "../services/DialogRef";
import type { ButtonDirection, ButtonSize, ButtonTheme } from "../../button";

export type NgFlexDialogRoot = {
  viewContainer: Signal<ViewContainerRef>;
  injector: Injector;
}

export type NgFlexDialogConfig = {
  closeOnEsc?: boolean;
  closeOnBackBtn?: boolean;
  backdropClose?: boolean;
  closeBtn?: boolean;
  data?: any
};

export type NgFlexDialogCommand<T = any> = {
  name: string;
  value?: T;
};

export const NGF_DIALOG_DATA = new InjectionToken<any>('ngf-dialog-data');

export type NgFlexDialogEvents<T = any> = {
  readonly closing: Observable<T | null>;
  readonly closed: Observable<T | null>;
};

export type NgFlexDialogButtonObj<T = any> = {
  icon?: string;
  text: string;
  theme?: ButtonTheme;
  direction?: ButtonDirection;
  size?: ButtonSize;
  onClick?: (e: MouseEvent, btn: NgFlexDialogButton<T>, dialogRef: NgFlexDialogRef<T>) => void;
};

export type NgFlexDialogButton<T = any> = 'flex' | NgFlexDialogButtonObj<T>;

export type NgFlexDialogAlertOptions = {
  title: string;
  content: string;
  buttons?: NgFlexDialogButton<boolean>[]
};

export type NgFlexDialogConfirmOptions = {
  title: string;
  content: string;
};
