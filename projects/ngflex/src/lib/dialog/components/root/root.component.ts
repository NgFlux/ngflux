import { Component, inject, Injector, viewChild, ViewContainerRef } from "@angular/core";

import { NgFlexDialogInternal } from "../../internal/Dialog";

@Component({
  selector: 'ngf-dialog-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [],
})
export class NgFlexDialogRootComponent {

  private readonly internal = inject(NgFlexDialogInternal);

  readonly injector = inject(Injector);
  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

  constructor() {
    const { internal } = this;
    internal.root.set(this);
  }

}
