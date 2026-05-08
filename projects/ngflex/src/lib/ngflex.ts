import { makeEnvironmentProviders } from "@angular/core";

import { NgFlexConfig } from "./core";

import {
  NgFlexDialog,
  NgFlexDialogInstance,
  NgFlexDialogRef,
  NgFlexDialogRegistry,
} from "./dialog";

export const provideNgFlex = (config?: NgFlexConfig) => {
  config ??= {};

  return makeEnvironmentProviders([
    NgFlexDialog,
    NgFlexDialogRef,
    NgFlexDialogInstance,
    NgFlexDialogRegistry,
  ]);
};
