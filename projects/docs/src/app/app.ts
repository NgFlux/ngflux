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

  openDialog(e: MouseEvent) {
    e.preventDefault();

    this.dialog.alert('Demo Dialog', 'Just testing').subscribe(resp => {
      console.log(resp);
    });
  }

}
