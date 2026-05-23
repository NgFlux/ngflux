import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgFluxDialogHeaderComponent } from "../../header/header.component";
import { NgFluxDialogFooterComponent } from "../../footer/footer.component";
import { NgFluxDialogBodyComponent } from "../../body/body.component";
import { NgFluxButton } from "../../../button/button.component";

import { NgFluxDialogRef } from "../../../../services";

import {
  NGF_CONFIG,
  NGF_DIALOG_DATA,
  NgFluxDialogButtonObj,
  NgFluxDialogPromptOptions,
} from "../../../../interfaces";

@Component({
  selector: 'ngf-dialog-box-prompt',
  templateUrl: 'prompt.dialog.html',
  styleUrls: ['prompt.dialog.scss'],
  imports: [
    FormsModule,
    NgFluxButton,
    NgFluxDialogHeaderComponent,
    NgFluxDialogFooterComponent,
    NgFluxDialogBodyComponent,
  ],
})
export class NgFluxPromptDialog {

  readonly config = inject(NGF_CONFIG);
  readonly dialogRef = inject<NgFluxDialogRef<string>>(NgFluxDialogRef);
  readonly options: NgFluxDialogPromptOptions = inject(NGF_DIALOG_DATA);

  readonly text = signal('');
  readonly value = computed(() => this.text().trim());

  readonly buttons = computed(() => {
    const config = this.config.dialog?.prompt ?? {};
    const value = this.value();

    return [
      this.options.cancelButton ?? Object.assign({
        text: 'Cancel',
        theme: 'dark',
        onClick: (e, btn, dialogRef) => dialogRef.close(),
      } as NgFluxDialogButtonObj, config.cancelButton),

      this.options.submitButton ?? Object.assign({
        text: 'Submit',
        theme: 'primary',
        onClick: (e, btn, dialogRef) => dialogRef.close(value),
        disabled: () => !value,
      } as NgFluxDialogButtonObj, config.submitButton),
    ]
  });

  onButtonClick(e: MouseEvent, btn: NgFluxDialogButtonObj) {
    btn.onClick?.call(null, e, btn, this.dialogRef);
  }

}
