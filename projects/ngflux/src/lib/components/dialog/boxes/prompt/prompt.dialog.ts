import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgFluxDialogHeader } from '../../header/header.component';
import { NgFluxDialogFooter } from '../../footer/footer.component';
import { NgFluxDialogBody } from '../../body/body.component';
import { NgFluxButton } from '../../../button/button.component';

import { NgFluxDialogRef } from '../../../../services';

import {
  NGF_CONFIG,
  NGF_DIALOG_DATA,
  NgFluxDialogButtonObj,
  NgFluxDialogPromptOptions,
} from '../../../../interfaces';

@Component({
  selector: 'ngf-dialog-box-prompt',
  templateUrl: 'prompt.dialog.html',
  styleUrls: ['prompt.dialog.scss'],
  imports: [
    FormsModule,
    NgFluxButton,
    NgFluxDialogHeader,
    NgFluxDialogFooter,
    NgFluxDialogBody,
  ],
})
export class NgFluxPromptDialog {

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFluxDialogRef<string>>(NgFluxDialogRef);
  readonly options: NgFluxDialogPromptOptions = inject(NGF_DIALOG_DATA);

  readonly text = signal(this.options.defaultValue ?? '');
  readonly value = computed(() => this.text().trim());

  readonly buttons = computed(() => {
    const config = this.config.dialog?.prompt ?? {};
    const value = this.value();

    const baseCancelButton: NgFluxDialogButtonObj = {
      text: 'Cancel',
      theme: 'dark',
      onClick: (e, btn, dialogRef) => dialogRef.close()
    };

    const baseSubmitButton: NgFluxDialogButtonObj = {
      text: 'Submit',
      theme: 'primary',
      onClick: (e, btn, dialogRef) => dialogRef.close(value),
      disabled: () => !value,
    };

    return [
      this.options.cancelButton ?? Object.assign(baseCancelButton, config.cancelButton),
      this.options.submitButton ?? Object.assign(baseSubmitButton, config.submitButton),
    ];
  });

  onButtonClick(e: MouseEvent, btn: NgFluxDialogButtonObj) {
    btn.onClick?.call(null, e, btn, this.dialogRef);
  }
}
