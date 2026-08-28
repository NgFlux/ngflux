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
      const toast = inject(NgFluxToastController);
      toast.initialize();
    }),
  ]);
};
