import { Component, HostBinding, input } from "@angular/core";
import { DocSection } from "../../interfaces/Section";

@Component({
  selector: 'doc-submenu',
  templateUrl: 'submenu.component.html',
  styleUrls: ['submenu.component.scss'],
})
export class DocSubmenuComponent {

  readonly data = input.required<DocSection[]>();
  protected readonly child = input(false);

  @HostBinding('class.child')
  get isChild() { return this.child(); }

  navigate(e: PointerEvent, item: DocSection) {
    e.preventDefault();
    item.scrollIntoView();
  }

}
