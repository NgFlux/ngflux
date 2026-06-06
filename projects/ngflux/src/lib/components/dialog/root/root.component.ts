import {
  Component,
  inject,
  Injector,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'ngf-dialog-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [],
})
export class NgFluxDialogRootComponent {

  readonly injector = inject(Injector);

  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

}
