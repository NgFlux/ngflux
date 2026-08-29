import { Component, inject } from "@angular/core";

import { NgFluxToastController } from "../../../internal";
import { KeyValuePipe } from "@angular/common";
import { NgFluxToastGroupComponent } from "../group/group.component";

@Component({
  selector: 'ngf-toast-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [
    KeyValuePipe,
    NgFluxToastGroupComponent,
  ],
})
export class NgFluxToastRootComponent {

  protected readonly ctrl = inject(NgFluxToastController);

}
