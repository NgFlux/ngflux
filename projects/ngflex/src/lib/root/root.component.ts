import { Component, viewChild } from "@angular/core";

import { NgFlexDialogRootComponent } from "../dialog";
import { NgFlexLoadingRootComponent } from "../loading";

@Component({
  selector: 'ngf-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [
    NgFlexDialogRootComponent,
    NgFlexLoadingRootComponent,
  ],
})
export class NgFlexRootComponent {

}
