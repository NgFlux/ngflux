import { InjectionToken, Injector, Signal, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";

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
  readonly afterClosed: Observable<T | undefined>;
};
