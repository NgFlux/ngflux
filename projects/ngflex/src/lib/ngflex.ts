import { makeEnvironmentProviders } from "@angular/core";

import { NGF_CONFIG, NgFlexConfig } from "./core";

import { NgFlexDialog, } from "./dialog";
import { NgFlexDialogInternal } from "./dialog/internal/Dialog";
import { NgFlexDialogRegistry } from "./dialog/internal/DialogRegistry";

import { NgFlexLoading } from "./loading";
import { NgFlexLoadingInternal } from "./loading/internal/Loading";

export const provideNgFlex = (config?: NgFlexConfig) => {
  config ??= {};

  return makeEnvironmentProviders([
    { provide: NGF_CONFIG, useValue: config },

    NgFlexDialog,
    NgFlexDialogRegistry,
    NgFlexDialogInternal,

    NgFlexLoading,
    NgFlexLoadingInternal,
  ]);
};
