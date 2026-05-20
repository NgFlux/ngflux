import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgFlexButton } from "../../../button";
import { NgFlexDialogHeaderComponent } from "../../components/header/header.component";
import { NgFlexDialogFooterComponent } from "../../components/footer/footer.component";
import { NgFlexDialogBodyComponent } from "../../components/body/body.component";
import { NGF_DIALOG_DATA, NgFlexDialogButtonObj, NgFlexDialogPromptOptions } from "../../interfaces/Dialog";
import { NgFlexDialogRef } from "../../services/DialogRef";
import { NGF_CONFIG } from "../../../core";

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
