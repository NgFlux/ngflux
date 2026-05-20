import { InjectionToken } from "@angular/core";
import type { NgFlexComponent } from "./interfaces/Component";
import type { ButtonOptions } from "../button";

// BEGIN: Dialog Options
type DialogAlertOptions = {
  okayButton?: ButtonOptions;
};

type DialogConfirmOptions = {
  okayButton?: ButtonOptions;
  cancelButton?: ButtonOptions;
};

type DialogPromptOptions = {
  submitButton?: ButtonOptions;
  cancelButton?: ButtonOptions;
};

type DialogOptions = {
  alert?: DialogAlertOptions;
  confirm?: DialogConfirmOptions;
  prompt?: DialogPromptOptions;
};

// END: Dialog Options

export type NgFlexConfig = {
  loadingComponent?: NgFlexComponent;

  dialogOptions?: DialogOptions;
};

export const NGF_CONFIG = new InjectionToken<NgFlexConfig>('ngf-config');
