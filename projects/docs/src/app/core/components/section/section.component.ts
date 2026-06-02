import { Component, input } from "@angular/core";

@Component({
  selector: 'doc-section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.scss'],
  imports: [],
})
export class DocSectionComponent {

  readonly name = input('');
  readonly showName = input(true);

  readonly id = input('');

}
