import { Component, computed, inject } from "@angular/core";

import { NgFluxDialogRef } from "../../../../services";
import { NGF_CONFIG, NGF_DIALOG_DATA, NgFluxDialogAlertOptions, NgFluxDialogButton, NgFluxDialogButtonObj } from "../../../../interfaces";

import { NgFluxDialogHeaderComponent } from "../../header/header.component";
import { NgFluxDialogBodyComponent } from "../../body/body.component";
import { NgFluxDialogFooterComponent } from "../../footer/footer.component";
import { NgFluxButton } from "../../../button/button.component";

@Component({
  selector: 'ngf-dialog-box-alert',
  templateUrl: 'alert.dialog.html',
  styleUrls: ['alert.dialog.scss'],
  imports: [
    NgFluxButton,
    NgFluxDialogHeaderComponent,
    NgFluxDialogBodyComponent,
    NgFluxDialogFooterComponent,
  ],
})
export class NgFluxAlertDialog {

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFluxDialogRef<boolean>>(NgFluxDialogRef);
  readonly options: NgFluxDialogAlertOptions = inject(NGF_DIALOG_DATA);

  readonly buttons = computed<NgFluxDialogButton<boolean>[]>(() => {
    const config = this.config.dialog?.alert || {};

    return this.options.buttons ?? [
      Object.assign({
        text: 'Okay',
        theme: 'primary',
        onClick: (e, btn, ref) => ref.close(),
      } as NgFluxDialogButtonObj<boolean>, config.okayButton),
    ];
  });

  onButtonClick(e: MouseEvent, btn: NgFluxDialogButtonObj<boolean>) {
    const { dialogRef } = this;

    if (btn.onClick) {
      btn.onClick(e, btn, dialogRef);
    } else {
      dialogRef.close();
    }
  }

}
