import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFlexDialog, NgFlexLoading, NgFlexPagination, NgFlexRootComponent, PaginationTransformer } from 'ngflex';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    NgFlexRootComponent,
    NgFlexPagination,
  ],
})
export class App {

  private dialog = inject(NgFlexDialog);
  private loading = inject(NgFlexLoading);

  protected readonly title = signal('docs');

  protected readonly transform: PaginationTransformer = {
    getCurrentPage: (data) => 1,
    getFrom: (data) => 1,
    getTo: (data) => 20,
    getLastPage: data => 5,
    getPerPage: data => 20,
    getTotal: data => 95,
    getData: data => [],
  };

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
