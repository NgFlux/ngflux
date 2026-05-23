import { Component, computed, inject } from "@angular/core";

import { NgFluxDialogHeaderComponent } from "../../header/header.component";
import { NgFluxDialogFooterComponent } from "../../footer/footer.component";
import { NgFluxDialogBodyComponent } from "../../body/body.component";
import { NgFluxButton } from "../../../button/button.component";

import { NgFluxDialogRef } from "../../../../services";

import {
  NGF_CONFIG,
  NGF_DIALOG_DATA,
  NgFluxDialogButtonObj,
  NgFluxDialogConfirmOptions,
} from "../../../../interfaces";

@Component({
  selector: 'ngf-dialog-box-confirm',
  templateUrl: 'confirm.dialog.html',
  styleUrls: ['confirm.dialog.scss'],
  imports: [
    NgFluxButton,
    NgFluxDialogHeaderComponent,
    NgFluxDialogFooterComponent,
    NgFluxDialogBodyComponent,
  ],
})
export class NgFluxConfirmDialog {

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFluxDialogRef<boolean>>(NgFluxDialogRef);
  readonly options: NgFluxDialogConfirmOptions = inject(NGF_DIALOG_DATA);

  readonly buttons = computed(() => {
    const config = this.config.dialog?.prompt ?? {};

    return [
      this.options.cancelButton ?? Object.assign({
        text: 'Cancel',
        theme: 'dark',
        onClick: (e, btn, dialogRef) => dialogRef.close(),
      } as NgFluxDialogButtonObj, config.cancelButton),

      this.options.okayButton ?? Object.assign({
        text: 'Okay',
        theme: 'primary',
        onClick: (e, btn, dialogRef) => dialogRef.close(true),
      } as NgFluxDialogButtonObj, config.submitButton),
    ]
  });

  onButtonClick(e: MouseEvent, btn: NgFluxDialogButtonObj) {
    btn.onClick?.call(null, e, btn, this.dialogRef);
  }

}
