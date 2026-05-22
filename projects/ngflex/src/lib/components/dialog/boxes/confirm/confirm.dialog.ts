import { Component, computed, inject } from "@angular/core";

import { NgFlexDialogHeaderComponent } from "../../header/header.component";
import { NgFlexDialogFooterComponent } from "../../footer/footer.component";
import { NgFlexDialogBodyComponent } from "../../body/body.component";
import { NgFlexButton } from "../../../button/button.component";

import { NgFlexDialogRef } from "../../../../services";

import {
  NGF_CONFIG,
  NGF_DIALOG_DATA,
  NgFlexDialogButtonObj,
  NgFlexDialogConfirmOptions,
} from "../../../../interfaces";

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

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFlexDialogRef<boolean>>(NgFlexDialogRef);
  readonly options: NgFlexDialogConfirmOptions = inject(NGF_DIALOG_DATA);

  readonly buttons = computed(() => {
    const config = this.config.dialog?.prompt ?? {};

    return [
      this.options.cancelButton ?? Object.assign({
        text: 'Cancel',
        theme: 'dark',
        onClick: (e, btn, dialogRef) => dialogRef.close(),
      } as NgFlexDialogButtonObj, config.cancelButton),

      this.options.okayButton ?? Object.assign({
        text: 'Okay',
        theme: 'primary',
        onClick: (e, btn, dialogRef) => dialogRef.close(true),
      } as NgFlexDialogButtonObj, config.submitButton),
    ]
  });

  onButtonClick(e: MouseEvent, btn: NgFlexDialogButtonObj) {
    btn.onClick?.call(null, e, btn, this.dialogRef);
  }

}
