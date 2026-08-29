import { InjectionToken } from "@angular/core";
import type { NgFluxComponent } from "./Component";
import type { ButtonOptions } from "./Button";
import type { PaginationTransformer } from "./Pagination";
import type { ToastOptions } from "./Toast";

export type NgFluxConfig = {
  loading?: LoadingConfiguration;
  dialog?: DialogConfiguration;
  pagination?: PaginationConfiguration;
  title?: RouterTitleConfiguration;
  toast?: ToastConfiguration;
};

export const NGF_CONFIG = new InjectionToken<NgFluxConfig>('ngf-config');

// BEGIN: Router
type RouterTitleConfiguration = {
  separator?: string;
  prefix?: string;
  suffix?: string;
};
// END: Router


// BEGIN: Loading
type LoadingConfiguration = {
  showOnRouteNavigation?: boolean;
  component?: NgFluxComponent;
};
// END: Loading

// BEGIN: Dialog Options
type DialogAlertConfiguration = {
  okayButton?: ButtonOptions;
};

type DialogConfirmConfiguration = {
  okayButton?: ButtonOptions;
  cancelButton?: ButtonOptions;
};

type DialogPromptConfiguration = {
  submitButton?: ButtonOptions;
  cancelButton?: ButtonOptions;
};

type DialogConfiguration = {
  alert?: DialogAlertConfiguration;
  confirm?: DialogConfirmConfiguration;
  prompt?: DialogPromptConfiguration;
};
// END: Dialog Options

// BEGIN: Pagination
type PaginationConfiguration = {
  preload?: boolean;
  transform?: PaginationTransformer;
  limitOptions?: number[];
  limit?: number;
};
// END: Pagination

// BEGIN: Pagination
type ToastConfiguration = {
  options?: Omit<ToastOptions, 'content'>;
};
// END: Pagination
