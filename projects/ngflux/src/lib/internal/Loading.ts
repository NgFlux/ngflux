import { ApplicationRef, ComponentRef, computed, createComponent, EmbeddedViewRef, inject, Injectable, signal } from "@angular/core";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs";

import { NgFluxLoadingRootComponent } from "../components";
import { NGF_CONFIG } from "../interfaces";

@Injectable({ providedIn: 'root' })
export class NgFluxLoadingInternal {

  private readonly config = inject(NGF_CONFIG);
  private readonly appRef = inject(ApplicationRef);
  private readonly router = inject(Router, { optional: true });

  readonly rootRef: ComponentRef<NgFluxLoadingRootComponent>;

  constructor() {
    const { appRef } = this;

    this.rootRef = createComponent(NgFluxLoadingRootComponent, {
      environmentInjector: appRef.injector,
    });
  }

  initialize() {
    const { appRef, rootRef } = this;
    appRef.attachView(rootRef.hostView);

    const elem = rootRef.location.nativeElement as HTMLElement;
    document.body.appendChild(elem);
  }

  showOnRouteNavigation() {
    const { config, router } = this;

    if (router && config.loading?.showOnRouteNavigation) {
      const root = this.rootRef.instance;

      const navStart = filter(nav => nav instanceof NavigationStart);
      router.events.pipe(navStart).subscribe(nav => root.start());

      const navEnd = filter(nav => nav instanceof NavigationEnd);
      router.events.pipe(navEnd).subscribe(nav => root.stop());

      const navCancel = filter(nav => nav instanceof NavigationCancel);
      router.events.pipe(navCancel).subscribe(nav => root.stop());

      const navError = filter(nav => nav instanceof NavigationError);
      router.events.pipe(navError).subscribe(nav => root.stop());
    }
  }

}
