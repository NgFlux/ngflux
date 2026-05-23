import { makeEnvironmentProviders } from "@angular/core";

import {
  NGF_CONFIG,
  NgFluxConfig,
} from "./interfaces";

import {
  NgFluxDialog,
  NgFluxLoading,
} from "./services";

import {
  NgFluxDialogInternal,
  NgFluxLoadingInternal,
} from "./internal";

export const provideNgFlux = (config?: NgFluxConfig) => {
  config ??= {};

  return makeEnvironmentProviders([
    { provide: NGF_CONFIG, useValue: config },

    NgFluxDialog,
    NgFluxDialogInternal,

    NgFluxLoading,
    NgFluxLoadingInternal,
  ]);
};
