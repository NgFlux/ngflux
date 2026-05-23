import { Component, viewChild } from "@angular/core";

import { NgFluxDialogRootComponent } from "../dialog/root/root.component";
import { NgFluxLoadingRootComponent } from "../loading/root/root.component";

@Component({
  selector: 'ngf-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [
    NgFluxDialogRootComponent,
    NgFluxLoadingRootComponent,
  ],
})
export class NgFluxRootComponent {

}
