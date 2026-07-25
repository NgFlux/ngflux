import { Component } from "@angular/core";

import { FrameOptions, NgFluxFrame } from '@ngflux/ngflux';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-features-frame-page',
  templateUrl: 'frame.page.html',
  styleUrls: ['frame.page.scss'],
  imports: [
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    NgFluxFrame,
  ],
})
export class FeaturesFramePage {

  protected readonly options: FrameOptions = {
    title: 'Demo Frame',
  };

}
