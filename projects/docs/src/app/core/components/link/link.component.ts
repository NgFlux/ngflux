import { Component, input } from "@angular/core";
import { DocMenu } from "../../interfaces/Menu";

@Component({
  selector: 'doc-link',
  templateUrl: 'link.component.html',
  styleUrls: ['link.component.scss'],
  imports: [],
})
export class DocLinkComponent {

  readonly data = input.required<DocMenu>();

}
