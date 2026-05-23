import { Component, inject, Injector, viewChild, ViewContainerRef } from "@angular/core";

import { NgFluxDialogInternal } from "../../../internal";

@Component({
  selector: 'ngf-dialog-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [],
})
export class NgFluxDialogRootComponent {

  private readonly internal = inject(NgFluxDialogInternal);

  readonly injector = inject(Injector);
  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

  constructor() {
    const { internal } = this;
    internal.root.set(this);
  }

}
