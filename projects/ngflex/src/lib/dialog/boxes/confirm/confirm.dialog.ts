import { Component, inject } from "@angular/core";

import { NGF_DIALOG_DATA, NgFlexDialogConfirmOptions } from "../../interfaces/Dialog";
import { NgFlexButton } from "../../../button";
import { NgFlexDialogHeaderComponent } from "../../components/header/header.component";
import { NgFlexDialogBodyComponent } from "../../components/body/body.component";
import { NgFlexDialogFooterComponent } from "../../components/footer/footer.component";
import { NgFlexDialogRef } from "../../services/DialogRef";

@Component({
  selector: 'ngf-dialog-box-confirm',
  templateUrl: 'confirm.dialog.html',
  styleUrls: ['confirm.dialog.scss'],
  imports: [
    NgFlexButton,
    NgFlexDialogHeaderComponent,
    NgFlexDialogFooterComponent,
    NgFlexDialogBodyComponent,
  ],
})
export class NgFlexConfirmDialog {

  readonly dialogRef = inject<NgFlexDialogRef<boolean>>(NgFlexDialogRef);
  readonly options: NgFlexDialogConfirmOptions = inject(NGF_DIALOG_DATA);

}
