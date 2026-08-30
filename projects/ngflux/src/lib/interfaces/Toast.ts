import type { NgFluxTheme } from "./Core";

export type ToastPlacement = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';

export type ToastOptions = {
  /**
   * Content of the toast
   */
  content: string;

  /**
   * Placement of the toast
   * The default placement is `topRight`
   */
  placement?: ToastPlacement;

  /**
   * Whether to show the close button.
   * The default value is `true`
   */
  showCloseButton?: boolean;

  /**
   * Timeout in milliseconds.
   * The default timeout is `10000` (10 seconds).
   */
  timeout?: number;

  /**
   * Theme for the Toast
   * The default theme is `info`
   */
  theme?: NgFluxTheme;
};

export type ToastOptionsWithoutTheme = Omit<ToastOptions, 'theme'>;
