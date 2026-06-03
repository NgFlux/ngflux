import { NgTemplateOutlet } from "@angular/common";
import { Component, computed, contentChildren, signal } from "@angular/core";
import { DocCodeComponent } from "../code.component";

@Component({
  selector: 'doc-code-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.scss'],
  imports: [
    NgTemplateOutlet,
  ],
})
export class DocCodeGroupComponent {

  protected readonly blocks = contentChildren(DocCodeComponent);

  protected readonly index = signal(0);

  protected readonly active = computed(() => {
    const index = this.index();
    const blocks = this.blocks();
    return blocks.at(index) ?? null;
  });

}
