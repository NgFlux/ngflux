import { InjectionToken } from "@angular/core";
import { NgFlexComponent, NgFlexDialogConfig } from "../interfaces";
import type { NgFlexDialogInstance } from "../services";

export const NGF_DIALOG_CONTENT = new InjectionToken<NgFlexComponent>('ngf-dialog-content');

export const NGF_DIALOG_CONFIG = new InjectionToken<NgFlexDialogConfig>('ngf-dialog-config');

export const NGF_DIALOG_INSTANCE = new InjectionToken<NgFlexDialogInstance>('ngf-dialog-instance');

export type OnDialogClose<T = any> = (data?: T) => void;
export const NGF_DIALOG_CLOSE_FN = new InjectionToken<OnDialogClose>('ngf-dialog-close-fn');
