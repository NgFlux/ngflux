import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DocSectionComponent } from '@docs/core';

import { FeaturesPage } from '../features.page';

@Component({
  selector: 'app-features-overview-page',
  templateUrl: 'overview.page.html',
  styleUrls: ['overview.page.scss'],
  imports: [
    DocSectionComponent,
    RouterLink,
],
})
export class FeaturesOverviewPage {

  protected readonly route = inject(ActivatedRoute);

  private readonly root = inject(FeaturesPage);
  protected readonly menu = this.root.menu.slice(1);

}
