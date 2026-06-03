import { Component, input } from "@angular/core";

@Component({
  selector: 'doc-code',
  templateUrl: 'code.component.html',
  styleUrls: ['code.component.scss'],
  imports: [],
})
export class DocCodeComponent {

  readonly name = input('');
  readonly language = input('');

}
