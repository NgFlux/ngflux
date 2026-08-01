import { Component, computed, inject } from '@angular/core';

import {
  NGF_CONFIG,
  NGF_DIALOG_DATA,
  NgFluxDialogAlertOptions,
  NgFluxDialogButton,
  NgFluxDialogButtonObj,
} from '../../../../interfaces';

import { NgFluxDialogRef } from '../../../../services';

import { NgFluxDialogHeader } from '../../header/header.component';
import { NgFluxDialogBody } from '../../body/body.component';
import { NgFluxDialogFooter } from '../../footer/footer.component';
import { NgFluxButton } from '../../../button/button.component';

@Component({
  selector: 'ngf-dialog-box-alert',
  templateUrl: 'alert.dialog.html',
  styleUrls: ['alert.dialog.scss'],
  imports: [
    NgFluxButton,
    NgFluxDialogHeader,
    NgFluxDialogBody,
    NgFluxDialogFooter,
  ],
})
export class NgFluxAlertDialog {

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFluxDialogRef<boolean>>(NgFluxDialogRef);
  readonly options: NgFluxDialogAlertOptions = inject(NGF_DIALOG_DATA);

  readonly buttons = computed<NgFluxDialogButton<boolean>[]>(() => {
    const config = this.config.dialog?.alert || {};

    const baseOkayButton: NgFluxDialogButtonObj<boolean> = {
      text: 'Okay',
      theme: 'primary',
      onClick: (e, btn, ref) => ref.close(),
    };

    return (
      this.options.buttons ?? [Object.assign(baseOkayButton, config.okayButton)]
    );
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
