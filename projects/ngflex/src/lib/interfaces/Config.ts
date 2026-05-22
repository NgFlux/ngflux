import { InjectionToken } from "@angular/core";
import type { NgFlexComponent } from "./Component";
import type { ButtonOptions } from "./Button";
import type { PaginationTransformer } from "./Pagination";

// BEGIN: Loading
type LoadingOptions = {
  component?: NgFlexComponent;
};
// END: Loading

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

// BEGIN: Pagination
type PaginationOptions = {
  preload?: boolean;
  transform?: PaginationTransformer;
  limitEntries?: number[];
  limit?: number;
};
// END: Pagination

export type NgFlexConfig = {
  loading?: LoadingOptions;
  dialog?: DialogOptions;
  pagination?: PaginationOptions;
};

export const NGF_CONFIG = new InjectionToken<NgFlexConfig>('ngf-config');
