import { InjectionToken } from "@angular/core";
import type { NgFluxComponent } from "./Component";
import type { ButtonOptions } from "./Button";
import type { PaginationTransformer } from "./Pagination";

export type NgFluxConfig = {
  loading?: LoadingOptions;
  dialog?: DialogOptions;
  pagination?: PaginationOptions;
  title?: RouterTitleOptions;
};

export const NGF_CONFIG = new InjectionToken<NgFluxConfig>('ngf-config');

// BEGIN: Router
type RouterTitleOptions = {
  separator?: string;
  prefix?: string;
  suffix?: string;
};
// END: Router


// BEGIN: Loading
type LoadingOptions = {
  showOnRouteNavigation?: boolean;
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
  limitOptions?: number[];
  limit?: number;
};
// END: Pagination
