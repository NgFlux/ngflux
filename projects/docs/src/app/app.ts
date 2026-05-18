import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFlexDialog, NgFlexRootComponent } from 'ngflex';

@Component({
  selector: 'app-root',
  imports: [NgFlexRootComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  private dialog = inject(NgFlexDialog);

  protected readonly title = signal('docs');

  openAlert(e: MouseEvent) {
    e.preventDefault();
    this.dialog.alert('Demo Alert', 'Just testing');
  }

  openConfirm(e: MouseEvent) {
    e.preventDefault();

    this.dialog.confirm({
      title: 'Demo Confirm',
      content: 'Just testing',
    });
  }

  openPrompt(e: MouseEvent) {
    e.preventDefault();

    this.dialog.prompt({
      title: 'Demo Prompt',
      content: 'Just testing',
    });
  }

}
