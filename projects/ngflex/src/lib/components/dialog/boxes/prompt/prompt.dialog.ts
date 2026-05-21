import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgFlexDialogHeaderComponent } from "../../header/header.component";
import { NgFlexDialogFooterComponent } from "../../footer/footer.component";
import { NgFlexDialogBodyComponent } from "../../body/body.component";
import { NgFlexButton } from "../../../button/button.component";

import { NgFlexDialogRef } from "../../../../services";

import {
  NGF_CONFIG,
  NGF_DIALOG_DATA,
  NgFlexDialogButtonObj,
  NgFlexDialogPromptOptions,
} from "../../../../interfaces";

@Component({
  selector: 'ngf-dialog-box-prompt',
  templateUrl: 'prompt.dialog.html',
  styleUrls: ['prompt.dialog.scss'],
  imports: [
    FormsModule,
    NgFlexButton,
    NgFlexDialogHeaderComponent,
    NgFlexDialogFooterComponent,
    NgFlexDialogBodyComponent,
  ],
})
export class NgFlexPromptDialog {

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFlexDialogRef<string>>(NgFlexDialogRef);
  readonly options: NgFlexDialogPromptOptions = inject(NGF_DIALOG_DATA);

  readonly text = signal('');
  readonly value = computed(() => this.text().trim());

  readonly buttons = computed(() => {
    const config = this.config.dialogOptions?.prompt ?? {};
    const value = this.value();

    return [
      this.options.cancelButton ?? Object.assign({
        text: 'Cancel',
        theme: 'dark',
        onClick: (e, btn, dialogRef) => dialogRef.close(),
      } as NgFlexDialogButtonObj, config.cancelButton),

      this.options.submitButton ?? Object.assign({
        text: 'Submit',
        theme: 'primary',
        onClick: (e, btn, dialogRef) => dialogRef.close(value),
        disabled: () => !value,
      } as NgFlexDialogButtonObj, config.submitButton),
    ]
  });

  onButtonClick(e: MouseEvent, btn: NgFlexDialogButtonObj) {
    btn.onClick?.call(null, e, btn, this.dialogRef);
  }

}
