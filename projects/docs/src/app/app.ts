import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFlexDialog, NgFlexLoading, NgFlexRootComponent } from 'ngflex';

@Component({
  selector: 'app-root',
  imports: [NgFlexRootComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  private dialog = inject(NgFlexDialog);
  private loading = inject(NgFlexLoading);

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

  showLoading(e: MouseEvent) {
    e.preventDefault();

    const { loading } = this;

    loading.start();
    setTimeout(() => loading.stop(), 5000);
  }

}
