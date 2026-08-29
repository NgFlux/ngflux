import type { NgFluxTheme } from "./Core";

export type ButtonDirection = 'normal' | 'reversed';
export type ButtonTheme = NgFluxTheme;
export type ButtonType = 'submit' | 'button' | 'reset' | 'menu';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonOptions = {
  icon?: string;
  text: string;
  theme?: ButtonTheme;
  direction?: ButtonDirection;
  size?: ButtonSize;
};
