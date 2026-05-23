import { InjectionToken } from "@angular/core";
import { NgFluxComponent, NgFluxDialogConfig } from "../interfaces";
import type { NgFluxDialogInstance } from "../services";

export const NGF_DIALOG_CONTENT = new InjectionToken<NgFluxComponent>('ngf-dialog-content');

export const NGF_DIALOG_CONFIG = new InjectionToken<NgFluxDialogConfig>('ngf-dialog-config');

export const NGF_DIALOG_INSTANCE = new InjectionToken<NgFluxDialogInstance>('ngf-dialog-instance');

export type OnDialogClose<T = any> = (data?: T) => void;
export const NGF_DIALOG_CLOSE_FN = new InjectionToken<OnDialogClose>('ngf-dialog-close-fn');
