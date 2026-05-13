import { Component, inject } from "@angular/core";
import { NgFlexDialogRef } from "../../services/DialogRef";

import { NgFlexDialogHeaderComponent } from "../../components/header/header.component";
import { NgFlexDialogBodyComponent } from "../../components/body/body.component";
import { NgFlexDialogFooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'ngf-dialog-box-alert',
  templateUrl: 'alert.dialog.html',
  styleUrls: ['alert.dialog.scss'],
  imports: [
    NgFlexDialogHeaderComponent,
    NgFlexDialogBodyComponent,
    NgFlexDialogFooterComponent,
  ],
})
export class NgFlexAlertDialog {

  readonly dialogRef = inject<NgFlexDialogRef<boolean>>(NgFlexDialogRef);

}
