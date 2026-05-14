import { Component, computed, inject } from "@angular/core";

import { NgFlexDialogRef } from "../../services/DialogRef";
import { NGF_DIALOG_DATA, NgFlexDialogAlertOptions, NgFlexDialogButton, NgFlexDialogButtonObj } from "../../interfaces/Dialog";

import { NgFlexDialogHeaderComponent } from "../../components/header/header.component";
import { NgFlexDialogBodyComponent } from "../../components/body/body.component";
import { NgFlexDialogFooterComponent } from "../../components/footer/footer.component";
import { NgFlexButton } from "../../../button";

@Component({
  selector: 'ngf-dialog-box-alert',
  templateUrl: 'alert.dialog.html',
  styleUrls: ['alert.dialog.scss'],
  imports: [
    NgFlexButton,
    NgFlexDialogHeaderComponent,
    NgFlexDialogBodyComponent,
    NgFlexDialogFooterComponent,
  ],
})
export class NgFlexAlertDialog {

  readonly dialogRef = inject<NgFlexDialogRef<boolean>>(NgFlexDialogRef);
  readonly options: NgFlexDialogAlertOptions = inject(NGF_DIALOG_DATA);

  readonly buttons = computed<NgFlexDialogButton<boolean>[]>(() => this.options.buttons ?? [
    { text: 'Okay', theme: 'primary', onClick: (e, btn, ref) => ref.close() },
  ]);

  onButtonClick(e: MouseEvent, btn: NgFlexDialogButtonObj<boolean>) {
    const { dialogRef } = this;

    if (btn.onClick) {
      btn.onClick(e, btn, dialogRef);
    } else {
      dialogRef.close();
    }
  }

}
