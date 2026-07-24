import { Component, input } from "@angular/core";

type Justify = 'start' | 'center' | 'end' | 'stretch';

@Component({
  selector: 'ngf-actions',
  templateUrl: 'actions.component.html',
  styleUrls: ['actions.component.scss'],
  imports: []
})
export class NgFluxActions {

  readonly justify = input<Justify>('end');
  readonly wrap = input(true);
  readonly gap = input(10);

}
