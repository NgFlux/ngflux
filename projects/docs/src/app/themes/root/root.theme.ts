import { Component, effect, ElementRef, signal, viewChild } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DateTime } from "luxon";

@Component({
  selector: 'root-theme',
  templateUrl: 'root.theme.html',
  styleUrls: ['root.theme.scss'],
  imports: [
    RouterLink,
  ],
})
export class RootTheme {

  protected readonly openMenu = signal(false);

  protected readonly year = DateTime.now().year;

  constructor() {
    effect((onCleanup) => {
      const onDocumentClick = (e: PointerEvent) => this.openMenu.set(false);
      document.addEventListener('click', onDocumentClick);

      onCleanup(() => {
        document.removeEventListener('click', onDocumentClick);
      });
    });
  }

  onNavbarClick(e: PointerEvent) {
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (target.closest('a')) {
      this.openMenu.set(false);
    }
  }

}
