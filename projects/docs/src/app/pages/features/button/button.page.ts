import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirection, ButtonSize, ButtonTheme, NgFluxButton } from '@ngflux/ngflux';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-features-button-page',
  templateUrl: 'button.page.html',
  styleUrls: ['button.page.scss'],
  imports: [
    FormsModule,
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
    NgFluxButton,
  ],
})
export class FeaturesButtonPage {

  protected readonly themes: ButtonTheme[] = ['default', 'primary', 'secondary', 'success', 'error', 'warning', 'light', 'info', 'danger', 'dark'];
  protected readonly theme = signal<ButtonTheme>('default');

  protected readonly sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  protected readonly size = signal<ButtonSize>('md');

  protected readonly icon = signal<string>('fa-solid fa-magnifying-glass');

  protected readonly directions: ButtonDirection[] = ['normal', 'reversed'];
  protected readonly direction = signal<ButtonDirection>('normal');

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

}
