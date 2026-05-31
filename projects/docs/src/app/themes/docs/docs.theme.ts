import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'docs-theme',
  templateUrl: 'docs.theme.html',
  styleUrls: ['docs.theme.scss'],
  imports: [
    NgClass,
  ],
})
export class DocsTheme {

  protected readonly leftOpen = signal(false);
  protected readonly leftBtn = computed(() => this.leftOpen() ? 'fa-angles-left' : 'fa-angles-right');

  protected readonly rightOpen = signal(false);
  protected readonly rightBtn = computed(() => this.rightOpen() ? 'fa-angles-right' : 'fa-angles-left');

}
