import { InjectionToken } from "@angular/core";
import type { NgFluxComponent } from "./Component";
import type { ButtonOptions } from "./Button";
import type { PaginationTransformer } from "./Pagination";

// BEGIN: Loading
type LoadingOptions = {
  component?: NgFluxComponent;
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

export type NgFluxConfig = {
  loading?: LoadingOptions;
  dialog?: DialogOptions;
  pagination?: PaginationOptions;
};

export const NGF_CONFIG = new InjectionToken<NgFluxConfig>('ngf-config');
