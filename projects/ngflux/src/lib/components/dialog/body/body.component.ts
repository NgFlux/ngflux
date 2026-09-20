import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'ngf-dialog-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.scss'],
  imports: [],
  host: {
    '[class.flat]': 'flat()',
  },
})
export class NgFluxDialogBody {

  readonly flat = input(false, { transform: booleanAttribute });

}
