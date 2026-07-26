import { booleanAttribute, Component, computed, debounced, ElementRef, inject, input, signal, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FrameOptions, Menu } from "../../interfaces";
import { NgFluxFrameMainMenu } from "./main-menu/main-menu.component";
import { NgFluxFrameSideMenu } from "./side-menu/side-menu.component";

@Component({
  selector: 'ngf-frame',
  templateUrl: 'frame.component.html',
  styleUrls: ['frame.component.scss'],
  imports: [
    FormsModule,
    NgFluxFrameMainMenu,
    NgFluxFrameSideMenu,
  ],
  host: {
    '[class.viewport]': 'viewport()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class NgFluxFrame {

  private readonly leftRef = viewChild.required<ElementRef<HTMLElement>>('left');

  readonly viewport = input(false, { transform: booleanAttribute });

  readonly options = input<FrameOptions>({});

  protected readonly title = computed(() => this.options().title ?? '');
  protected readonly icon = computed(() => this.options().icon ?? '');
  protected readonly image = computed(() => this.options().image ?? '');
  protected readonly toolbarItems = computed(() => this.options().toolbarItems ?? []);
  protected readonly mainMenu = computed(() => this.options().mainMenu ?? []);

  protected readonly drawer = signal(false);

  protected readonly search = signal('');
  protected readonly searchText = debounced(this.search, 300);

  protected readonly sideMenu = computed(() => {
    const menu = this.options().sideMenu ?? [];

    const text = (this.searchText.value() ?? '').trim().toLowerCase();
    if (!text) return menu;

    return this.searchMenu(text, menu);
  });

  private searchMenu(text: string, menu?: Menu[]) {
    const result: Menu[] = [];

    for (let entry of menu ?? []) {
      const item = Object.assign({}, entry);
      item.children = this.searchMenu(text, item.children);

      if (item.children.length) {
        result.push(item);
        continue;
      }

      const itemText = item.text.toLowerCase();
      if (itemText.includes(text)) result.push(item);
    }

    return result;
  }

  protected toggleDrawer(e?: PointerEvent) {
    e?.stopPropagation();
    this.drawer.update(v => !v);
  }

  protected closeDrawer(e?: PointerEvent) {
    e?.stopPropagation();
    this.drawer.set(false);
  }

  protected onDocumentClick(e: PointerEvent) {
    const target = e.target as HTMLElement;
    const left = this.leftRef().nativeElement;

    if (left.contains(target)) return;

    this.drawer.set(false);
  }

}
