import { NgTemplateOutlet } from "@angular/common";
import { Component, input, TemplateRef } from "@angular/core";

@Component({
  selector: 'ngf-tab-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.scss'],
  imports: [NgTemplateOutlet],
})
export class NgFluxTabPanel {

  readonly label = input<string>();

  setContent(tpl?: TemplateRef<any> | null) {
    // 
  }

}
