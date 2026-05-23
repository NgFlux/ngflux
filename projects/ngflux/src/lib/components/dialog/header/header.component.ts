import { NgClass } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { NGF_DIALOG_CONFIG } from "../../../internal";
import { NgFluxDialogRef } from "../../../services";

@Component({
  selector: 'ngf-dialog-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  imports: [
    NgClass,
  ],
})
export class NgFluxDialogHeaderComponent {

  readonly config = inject(NGF_DIALOG_CONFIG);
  readonly dialogRef = inject(NgFluxDialogRef);

  readonly icon = input<string>();

}
