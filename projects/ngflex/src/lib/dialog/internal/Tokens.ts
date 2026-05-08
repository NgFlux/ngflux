import { InjectionToken } from "@angular/core";
import { NgFlexComponent } from "../../core";
import { NgFlexDialogConfig } from "../interfaces/Dialog";

export const NGF_DIALOG_CONTENT = new InjectionToken<NgFlexComponent>('ngf-dialog-content');

export const NGF_DIALOG_CONFIG = new InjectionToken<NgFlexDialogConfig>('ngf-dialog-config');
