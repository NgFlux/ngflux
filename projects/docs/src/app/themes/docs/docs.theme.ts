import { NgClass } from "@angular/common";
import { Component, computed, contentChildren, effect, inject, input, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormsModule } from "@angular/forms";
import { ActivationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

import { DocMenu, DocMenuComponent, DocSection, DocSectionComponent, DocThemeService } from "@docs/core";

@Component({
  selector: 'docs-theme',
  templateUrl: 'docs.theme.html',
  styleUrls: ['docs.theme.scss'],
  imports: [
    NgClass,
    FormsModule,
    DocMenuComponent,
],
})
export class DocsTheme {

  private readonly router = inject(Router);

  protected readonly service = inject(DocThemeService);

  readonly name = input.required<string>();
  readonly menu = input<DocMenu[]>([]);

  protected readonly search = signal('');
  protected readonly menuSearch = computed(() => {
    const menu = this.menu();

    const search = this.search().toLowerCase();
    if (!search) return menu;

    return menu.filter(m => {
      const text = m.text.toLowerCase();
      return text.includes(search);
    });
  });

  protected readonly leftOpen = signal(false);
  protected readonly leftBtn = computed(() => this.leftOpen() ? 'fa-angles-left' : 'fa-angles-right');

  protected readonly rightOpen = signal(false);
  protected readonly rightBtn = computed(() => this.rightOpen() ? 'fa-angles-right' : 'fa-angles-left');

  private readonly nav = toSignal(this.router.events.pipe(
    filter(e => e instanceof ActivationEnd),
    filter(e => !e.snapshot.firstChild),
  ), { initialValue: null });

  protected readonly title = computed(() => {
    const nav = this.nav();
    if (!nav) return '';

    const { snapshot } = nav;
    return snapshot.title ?? '';
  });

  constructor() {
    effect((onCleanup) => {
      document.addEventListener('click', this.onDocumentClick);

      onCleanup(() => {
        document.removeEventListener('click', this.onDocumentClick);
      });
    });
  }

  navigate(e: MouseEvent, section: DocSection) {
    e.preventDefault();
    section.scrollIntoView();
  }

  onLeftClick(e: MouseEvent) {
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (target.closest('a')) {
      this.leftOpen.set(false);
    }
  }

  onRightClick(e: MouseEvent) {
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (target.closest('a')) {
      this.rightOpen.set(false);
    }
  }

  readonly onDocumentClick = (e: PointerEvent) => {
    this.leftOpen.set(false);
    this.rightOpen.set(false);
  }

}
