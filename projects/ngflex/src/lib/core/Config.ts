import { InjectionToken } from "@angular/core";
import { NgFlexComponent } from "./interfaces/Component";

export type NgFlexConfig = {
  loadingComponent?: NgFlexComponent;
};

export const NGF_CONFIG = new InjectionToken<NgFlexConfig>('ngf-config');
