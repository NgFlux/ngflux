import { NgClass } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { NGF_DIALOG_CONFIG } from "../../../internal";
import { NgFlexDialogRef } from "../../../services";

@Component({
  selector: 'ngf-dialog-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  imports: [
    NgClass,
  ],
})
export class NgFlexDialogHeaderComponent {

  readonly config = inject(NGF_DIALOG_CONFIG);
  readonly dialogRef = inject(NgFlexDialogRef);

  readonly icon = input<string>();

}
