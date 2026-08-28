import { ApplicationRef, ComponentRef, createComponent, inject, Injectable } from "@angular/core";

import { NGF_CONFIG } from "../interfaces";
import { NgFluxToastRootComponent } from "../components/toast/root/root.component";

@Injectable({ providedIn: 'root' })
export class NgFluxToastController {

  private readonly config = inject(NGF_CONFIG);
  private readonly appRef = inject(ApplicationRef);

  readonly rootRef: ComponentRef<NgFluxToastRootComponent>;

  constructor() {
    const { appRef } = this;

    this.rootRef = createComponent(NgFluxToastRootComponent, {
      environmentInjector: appRef.injector,
    });
  }

  initialize() {
    const { appRef, rootRef } = this;
    appRef.attachView(rootRef.hostView);

    const elem = rootRef.location.nativeElement as HTMLElement;
    document.body.appendChild(elem);
  }

}
