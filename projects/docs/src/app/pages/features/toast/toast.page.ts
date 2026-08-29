import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFluxButton, NgFluxPinInput, NgFluxToast } from '@ngflux/ngflux';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-features-toast-page',
  templateUrl: 'toast.page.html',
  styleUrls: ['toast.page.scss'],
  imports: [
    FormsModule,
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    NgFluxPinInput,
    NgFluxButton,
  ],
})
export class FeaturesToastPage {

  private readonly toast = inject(NgFluxToast);

  protected readonly usage = `
import { Component } from '@angular/core';
import { NgFluxButton } from '@ngflux/ngflux';

@Component({
  imports: [NgFluxButton],
  template: \`
    <ngf-button theme="primary" size="md">
      Click Me
    </ngf-button>
  \`
})
export class MyComponent {}
  `;

  protected readonly showTopLeft = () => this.toast.show({
    content: 'Top Left Toast',
    placement: 'topLeft',
    theme: 'primary',
  })

  protected readonly showTopCenter = () => this.toast.show({
    content: 'Top Center Toast',
    placement: 'topCenter',
    theme: 'success',
  })

  protected readonly showTopRight = () => this.toast.show({
    content: 'Top Right Toast',
    placement: 'topRight',
    theme: 'error',
  })

  protected readonly showBottomLeft = () => this.toast.show({
    content: 'Bottom Left Toast',
    placement: 'bottomLeft',
  })

  protected readonly showBottomCenter = () => this.toast.show({
    content: 'Bottom Center Toast',
    placement: 'bottomCenter',
  })

  protected readonly showBottomRight = () => this.toast.show({
    content: 'Bottom Right Toast',
    placement: 'bottomRight',
  })

}
