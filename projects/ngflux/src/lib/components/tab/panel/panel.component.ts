import { NgTemplateOutlet } from "@angular/common";
import { Component, input, signal, TemplateRef } from "@angular/core";

@Component({
  selector: 'ngf-tab-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.scss'],
  imports: [NgTemplateOutlet],
})
export class NgFluxTabPanel {

  readonly label = input<string>();

  protected readonly content = signal<TemplateRef<any> | null>(null);

  setContent(tpl?: TemplateRef<any>) {
    this.content.set(tpl ?? null);
  }

}
