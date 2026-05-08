import { Component, inject, Injector, viewChild, ViewContainerRef } from "@angular/core";

import { NgFlexDialog } from "../../services/Dialog";
import { DialogRootMap } from "../../internal/Mapper";

@Component({
  selector: 'ngf-dialog-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [],
})
export class NgFlexDialogRootComponent {

  private readonly service = inject(NgFlexDialog);

  readonly injector = inject(Injector);
  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

  constructor() {
    const { service } = this;
    DialogRootMap.attach(service, this);
  }

}
