import { makeEnvironmentProviders } from "@angular/core";


import {
  NGF_CONFIG,
  NgFlexConfig,
} from "./interfaces";

import {
  NgFlexDialog,
  NgFlexLoading,
} from "./services";

import {
  NgFlexDialogInternal,
  NgFlexLoadingInternal,
} from "./internal";

export const provideNgFlex = (config?: NgFlexConfig) => {
  config ??= {};

  return makeEnvironmentProviders([
    { provide: NGF_CONFIG, useValue: config },

    NgFlexDialog,
    NgFlexDialogInternal,

    NgFlexLoading,
    NgFlexLoadingInternal,
  ]);
};
