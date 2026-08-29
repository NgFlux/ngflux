import { Component, input } from "@angular/core";

import { ToastPlacement } from "../../../interfaces";
import { ToastMappedOptions } from "../../../internal";
import { NgFluxToastComponent } from "../toast.component";

@Component({
  selector: 'ngf-toast-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.scss'],
  imports: [
    NgFluxToastComponent,
  ],
  host: {
    '[class]': 'placement()',
  },
})
export class NgFluxToastGroupComponent {

  readonly placement = input.required<ToastPlacement>();
  readonly items = input.required<ToastMappedOptions[]>();

}
