import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgFlexButton } from "../../../button";
import { NgFlexDialogHeaderComponent } from "../../components/header/header.component";
import { NgFlexDialogFooterComponent } from "../../components/footer/footer.component";
import { NgFlexDialogBodyComponent } from "../../components/body/body.component";
import { NGF_DIALOG_DATA, NgFlexDialogConfirmOptions } from "../../interfaces/Dialog";
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
  readonly options: NgFlexDialogConfirmOptions = inject(NGF_DIALOG_DATA);

  readonly text = signal('');
  readonly value = computed(() => this.text().trim());

}
