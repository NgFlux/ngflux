import { Component, inject } from "@angular/core";
import { NgFlexDialogRef } from "../../services/DialogRef";

@Component({
  selector: 'ngf-dialog-box-alert',
  templateUrl: 'alert.dialog.html',
  styleUrls: ['alert.dialog.scss'],
  imports: [],
})
export class NgFlexAlertDialog {

  readonly dialogRef = inject<NgFlexDialogRef<boolean>>(NgFlexDialogRef);

}
