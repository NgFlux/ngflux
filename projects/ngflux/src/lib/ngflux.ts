import { inject, makeEnvironmentProviders, provideAppInitializer } from "@angular/core";
import { TitleStrategy } from "@angular/router";

import {
  NGF_CONFIG,
  NgFluxConfig,
} from "./interfaces";

import {
  NgFluxDialog,
  NgFluxLoading,
} from "./services";

import {
  MetaInternal,
  NgFluxDialogInternal,
  NgFluxLoadingInternal,
  RouteTitleStrategy,
} from "./internal";

export const provideNgFlux = (config?: NgFluxConfig) => {
  config ??= {};

  return makeEnvironmentProviders([
    { provide: NGF_CONFIG, useValue: config },
    { provide: TitleStrategy, useClass: RouteTitleStrategy },

    NgFluxDialog,
    NgFluxDialogInternal,

    NgFluxLoading,
    NgFluxLoadingInternal,

    MetaInternal,

    provideAppInitializer(() => {
      const meta = inject(MetaInternal);
      meta.initialize();
    }),

    provideAppInitializer(() => {
      const dialog = inject(NgFluxDialogInternal);
      dialog.initialize();
    }),

    provideAppInitializer(() => {
      const loading = inject(NgFluxLoadingInternal);

      loading.initialize();
      loading.showOnRouteNavigation();
    }),
  ]);
};
