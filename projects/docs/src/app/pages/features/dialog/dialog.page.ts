import { Component, inject } from '@angular/core';
import { NgFluxDialog } from '@ngflux/ngflux';

import {
  DocCodeComponent,
  DocCodeGroupComponent,
  DocSectionComponent,
} from '@docs/core';

@Component({
  selector: 'app-features-dialog-page',
  templateUrl: 'dialog.page.html',
  styleUrls: ['dialog.page.scss'],
  imports: [
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
  ],
})
export class FeaturesDialogPage {

  private readonly dialog = inject(NgFluxDialog);

  protected readonly alertCode = `
import { Component, inject } from '@angular/core';
import { NgFluxDialog } from '@ngflux/ngflux';

@Component({
  standalone: true,
  template: \`<button (click)="showAlert()">Show Alert</button>\`
})
export class MyComponent {
  private dialog = inject(NgFluxDialog);

  showAlert() {
    this.dialog.alert({
      title: 'Session Expired',
      content: 'Your active session has timed out. Please log in again.',
      buttons: [
        { text: 'Got it' },
      ],
    }).subscribe(() => {
      // Executed when the user clicks the confirmation button
      console.log('Alert dismissed');
    });
  }
}
  `;

  protected readonly confirmCode = `
import { Component, inject } from '@angular/core';
import { NgFluxDialog } from '@ngflux/ngflux';

@Component({
  standalone: true,
  template: \`<button (click)="deleteItem()">Delete Item</button>\`
})
export class MyComponent {
  private dialog = inject(NgFluxDialog);

  deleteItem() {
    this.dialog.confirm({
      title: 'Are you absolutely sure?',
      content: 'This action cannot be undone. This will permanently delete your project.',
      okayButton: { text: 'Delete Everything' },
      cancelButton: { text: 'Keep It' },
    }).subscribe((confirmed) => {
      if (confirmed) {
        console.log('Proceeding with deletion...');
      } else {
        console.log('Deletion canceled');
      }
    });
  }
}
  `;

  protected readonly promptCode = `
this.dialog.prompt({
  title: 'Are you absolutely sure?',
  content: 'Enter a new tagline for your workspace:',
  placeholder: 'e.g., Build Awesome Apps',
  defaultValue: 'NgFlux Workspace',
  submitButton: { text: 'Continue' },
  cancelButton: { text: 'Cancel' },
}).subscribe((inputValue) => {
  if (inputValue !== null) {
    console.log('User entered:', inputValue);
  }
});
  `;

  protected readonly custom = {
    component: `
import { Component, computed, inject } from '@angular/core';

import {
  NGF_DIALOG_DATA,
  NgFluxDialogButton,
  NgFluxDialogRef,
  NgFluxDialogHeaderComponent,
  NgFluxDialogBodyComponent,
  NgFluxDialogFooterComponent,
  NgFluxButton,
} from '@ngflux/ngflux';

@Component({
  selector: 'custom-dialog',
  templateUrl: 'custom-dialog.dialog.html',
  styleUrls: ['custom-dialog.dialog.scss'],
  imports: [
    NgFluxButton,
    NgFluxDialogHeaderComponent,
    NgFluxDialogBodyComponent,
    NgFluxDialogFooterComponent,
  ],
})
export class NgFluxAlertDialog {

  protected readonly options = inject(NGF_DIALOG_DATA);
  protected readonly dialogRef = inject<NgFluxDialogRef<boolean>>(NgFluxDialogRef);

  submit() {
    // Do something...

    this.dialogRef.close('Data to emit');
  }

  cancel() {
    this.dialogRef.close();
  }
}
    `,

    html: `
<ngf-dialog-header>
  <h1 ngf-dialog-title>Custom Dialog</h1>
</ngf-dialog-header>

<ngf-dialog-body>
  <div>{{ options.workspaceName }}</div>
</ngf-dialog-body>

<ngf-dialog-footer>
  <ngf-button theme="dark" size="md" (click)="cancel()">
    <span>Cancel</span>
  </ngf-button>

  <ngf-button theme="primary" size="md" (click)="submit()">
    <span>Submit</span>
  </ngf-button>
</ngf-dialog-footer>
    `,
  };

  protected readonly openCode = `
import { Component, inject } from '@angular/core';
import { NgFluxDialog } from '@ngflux/ngflux';
import { ProjectFormDialogComponent } from './project-form-dialog.component';

@Component({
  standalone: true,
  template: \`<button (click)="openCustomForm()">New Project</button>\`
})
export class DashboardComponent {
  private dialog = inject(NgFluxDialog);

  openCustomForm() {
    const dlg = this.dialog.open(ProjectFormDialogComponent, {
      data: { workspaceName: 'Production Dev' },
      closeOnBackBtn: false, // Prevents closing by pressing the back button
      backdropClose: false, // Prevents closing by clicking the backdrop overlay
      closeOnEsc: false, // Prevents closing by pressing the 'Esc' key
    });

    dlg.closed.subscribe((projectName) => {
      if (projectName) {
        console.log(\`New project created: \${projectName}\`);
      }
    });
  }
}
  `;

  showAlert() {
    this.dialog.alert({
      title: 'Session Expired',
      content: 'Your active session has timed out. Please log in again.',
      buttons: [
        { text: 'Got it' },
      ],
    });
  }

  showConfirm() {
    this.dialog.confirm({
      title: 'Update Tagline',
      content: 'This action cannot be undone. This will permanently delete your project.',
      okayButton: { text: 'Delete Everything' },
      cancelButton: { text: 'Keep It' },
    });
  }

  showPrompt() {
    this.dialog.prompt({
      title: 'Are you absolutely sure?',
      content: 'Enter a new tagline for your workspace:',
      placeholder: 'e.g., Build Awesome Apps',
      defaultValue: 'NgFlux Workspace',
      submitButton: { text: 'Continue' },
      cancelButton: { text: 'Cancel' },
    });
  }

}
