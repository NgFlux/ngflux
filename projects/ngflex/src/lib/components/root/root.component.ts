import { Component, viewChild } from "@angular/core";

import { NgFlexDialogRootComponent } from "../dialog/root/root.component";
import { NgFlexLoadingRootComponent } from "../loading/root/root.component";

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
