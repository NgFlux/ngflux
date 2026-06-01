import { NgClass } from "@angular/common";
import { Component, computed, input, signal } from "@angular/core";
import { DocLinkComponent, DocMenu } from "@docs/core";
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'docs-theme',
  templateUrl: 'docs.theme.html',
  styleUrls: ['docs.theme.scss'],
  imports: [
    NgClass,
    RouterLinkActive,
    DocLinkComponent,
],
})
export class DocsTheme {

  readonly name = input.required<string>();
  readonly menu = input<DocMenu[]>([]);

  // TODO: Menu Search
  protected readonly search = signal('');
  protected readonly menuSearch = computed(() => this.menu());

  protected readonly leftOpen = signal(false);
  protected readonly leftBtn = computed(() => this.leftOpen() ? 'fa-angles-left' : 'fa-angles-right');

  protected readonly rightOpen = signal(false);
  protected readonly rightBtn = computed(() => this.rightOpen() ? 'fa-angles-right' : 'fa-angles-left');

}
