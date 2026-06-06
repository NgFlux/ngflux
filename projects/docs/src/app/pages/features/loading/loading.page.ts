import { Component, inject } from '@angular/core';
import { NgFluxLoading } from '@ngflux/ngflux';

@Component({
  selector: 'app-features-loading-page',
  templateUrl: 'loading.page.html',
  styleUrls: ['loading.page.scss'],
  imports: [],
})
export class FeaturesLoadingPage {

  private readonly loading = inject(NgFluxLoading);

  showLoading() {
    const { loading } = this;

    loading.start();

    setTimeout(() => loading.stop(), 5000);
  }

}
