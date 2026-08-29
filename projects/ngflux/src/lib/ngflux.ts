import { inject, makeEnvironmentProviders, provideAppInitializer } from "@angular/core";
import { TitleStrategy } from "@angular/router";

import {
  NGF_CONFIG,
  NgFluxConfig,
} from "./interfaces";

import {
  NgFluxDialog,
  NgFluxLoading,
  NgFluxToast,
} from "./services";

import {
  MetaInternal,
  NgFluxDialogInternal,
  NgFluxLoadingInternal,
  NgFluxToastController,
  NgFluxToastInitializer,
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

    NgFluxToast,
    NgFluxToastController,
    NgFluxToastInitializer,

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

    provideAppInitializer(() => {
      const toast = inject(NgFluxToastInitializer);
      toast.initialize();
    }),
  ]);
};
