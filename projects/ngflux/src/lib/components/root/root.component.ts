import { Component, viewChild, ChangeDetectionStrategy } from '@angular/core';

import { NgFluxDialogRootComponent } from '../dialog/root/root.component';
import { NgFluxLoadingRootComponent } from '../loading/root/root.component';

@Component({
  selector: 'ngf-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgFluxDialogRootComponent, NgFluxLoadingRootComponent],
})
export class NgFluxRootComponent {}
