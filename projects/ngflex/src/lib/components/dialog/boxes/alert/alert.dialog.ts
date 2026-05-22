import { Component, computed, inject } from "@angular/core";

import { NgFlexDialogRef } from "../../../../services";
import { NGF_CONFIG, NGF_DIALOG_DATA, NgFlexDialogAlertOptions, NgFlexDialogButton, NgFlexDialogButtonObj } from "../../../../interfaces";

import { NgFlexDialogHeaderComponent } from "../../header/header.component";
import { NgFlexDialogBodyComponent } from "../../body/body.component";
import { NgFlexDialogFooterComponent } from "../../footer/footer.component";
import { NgFlexButton } from "../../../button/button.component";

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

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFlexDialogRef<boolean>>(NgFlexDialogRef);
  readonly options: NgFlexDialogAlertOptions = inject(NGF_DIALOG_DATA);

  readonly buttons = computed<NgFlexDialogButton<boolean>[]>(() => {
    const config = this.config.dialog?.alert || {};

    return this.options.buttons ?? [
      Object.assign({
        text: 'Okay',
        theme: 'primary',
        onClick: (e, btn, ref) => ref.close(),
      } as NgFlexDialogButtonObj<boolean>, config.okayButton),
    ];
  });

  onButtonClick(e: MouseEvent, btn: NgFlexDialogButtonObj<boolean>) {
    const { dialogRef } = this;

    if (btn.onClick) {
      btn.onClick(e, btn, dialogRef);
    } else {
      dialogRef.close();
    }
  }

}
