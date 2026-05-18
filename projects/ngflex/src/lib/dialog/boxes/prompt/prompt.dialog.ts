import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgFlexButton } from "../../../button";
import { NgFlexDialogHeaderComponent } from "../../components/header/header.component";
import { NgFlexDialogFooterComponent } from "../../components/footer/footer.component";
import { NgFlexDialogBodyComponent } from "../../components/body/body.component";
import { NGF_DIALOG_DATA, NgFlexDialogButtonObj, NgFlexDialogPromptOptions } from "../../interfaces/Dialog";
import { NgFlexDialogRef } from "../../services/DialogRef";

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

  readonly dialogRef = inject<NgFlexDialogRef<string>>(NgFlexDialogRef);
  readonly options: NgFlexDialogPromptOptions = inject(NGF_DIALOG_DATA);

  readonly text = signal('');
  readonly value = computed(() => this.text().trim());

  readonly buttons = computed(() => {
    const value = this.value();

    return [
      this.options.cancelButton ?? {
        text: 'Cancel',
        theme: 'dark',
        onClick: (e, btn, dialogRef) => dialogRef.close(),
      },

      this.options.submitButton ?? {
        text: 'Submit',
        theme: 'primary',
        onClick: (e, btn, dialogRef) => dialogRef.close(value),
        disabled: () => !value,
      },
    ]
  });

  onButtonClick(e: MouseEvent, btn: NgFlexDialogButtonObj) {
    btn.onClick?.call(null, e, btn, this.dialogRef);
  }

}
