import { booleanAttribute, Component, computed, effect, ElementRef, inject, input, InputSignal, InputSignalWithTransform, model, ModelSignal, OutputRef, signal } from "@angular/core";
import { DisabledReason, FormValueControl, ValidationError, WithOptionalFieldTree } from "@angular/forms/signals";
import { FormsModule } from "@angular/forms";

import { SelectItem, SelectTransformer } from "../../../interfaces";
import { NgFluxSelectItems, SelectItemOptions } from "./items/items.component";

type Item<V = any> = Partial<SelectItem<any, V>>;

@Component({
  selector: 'ngf-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss'],
  imports: [
    FormsModule,
    NgFluxSelectItems,
  ],
  host: {
    '[class.block]': 'block()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class NgFluxSelect<V = any> implements FormValueControl<V | V[] | null> {

  private readonly ref: ElementRef<HTMLElement> = inject(ElementRef);

  readonly data = input.required<any[]>();
  readonly block = input(false, { transform: booleanAttribute });
  readonly multi = input(false, { transform: booleanAttribute });
  readonly placeholder = input<string>();
  readonly loading = input(false);
  readonly loadingText = input('Please wait...');

  readonly transform = input<SelectTransformer<any, V>>({
    getLabel: item => (item as Item<V>).label ?? '',
    getValue: item => (item as SelectItem<any, V>).value as V,
    getChildren: item => (item as Item<V>).children ?? [],
    setChildren: (item, children) => (item as Item<V>).children = children,
  });

  protected readonly mapper = computed(() => {
    const data = this.data();

    const value = new Map<V, any>();
    this.doFlatMap(value, data);

    return value;
  });

  readonly value = model<V | V[] | null>(null);

  protected readonly vmap = computed(() => {
    let value = this.value() ?? [];
    value = Array.isArray(value) ? value : [value];

    const mapper = this.mapper();
    const result = new Map<V, any>();

    for (let val of value) {
      const item = mapper.get(val);
      if (!item) continue;
      result.set(val, item);
    }

    return result;
  });

  protected readonly items = computed(() => Array.from(this.vmap().values()));

  protected readonly open = signal(false);

  protected readonly searchbox = signal('');

  protected readonly search = computed(() => {
    const data = this.data();

    const text = this.searchbox().toLowerCase();
    if (!text) return data;

    return this.doSearch(text, data);
  });

  protected readonly headerText = computed(() => {
    const multi = this.multi();
    const placeholder = this.placeholder() ?? 'Select Item' + (multi ? 's' : '');

    const items = Array.from(this.items());
    if (!items.length) return placeholder;

    const transform = this.transform();
    const first = items.splice(0, 1).at(0);

    let text = transform.getLabel(first);
    if (items.length) text += ` + ${items.length.toLocaleString()} more`;

    return text;
  });

  constructor() {
    effect(() => {
      const loading = this.loading();
      if (loading) this.open.set(false);
    });
  }

  private doFlatMap(map: Map<V, any>, data: any[]) {
    const transform = this.transform();

    for (let item of data) {
      const key = transform.getValue(item);
      map.set(key, item);

      const children = transform.getChildren?.(item) ?? [];
      this.doFlatMap(map, children);
    }
  }

  private doSearch(text: string, data: any[]) {
    const transform = this.transform();
    const result: any[] = [];

    for (let entry of data) {
      const item = Object.assign({}, entry);

      let children = transform.getChildren?.(item) ?? [];
      children = this.doSearch(text, children);
      transform.setChildren?.(item, children);

      if (children.length) {
        result.push(item);
        continue;
      }

      const label = transform.getLabel(item).toLowerCase();
      if (label.includes(text)) result.push(item);
    }

    return result;
  }

  protected toggleOpen() {
    if (this.multi()) return;
    this.open.update(v => !v);
  }

  protected toggle(item: any) {
    const multi = this.multi();
    const transform = this.transform();
    const vmap = new Map(this.vmap());

    const key = transform.getValue(item);
    if (!key) return;

    if (!vmap.has(key)) {
      if (!multi) vmap.clear();
      vmap.set(key, item);
    } else {
      vmap.delete(key);
    }

    const values = Array.from(vmap.keys());

    if (values.length) {
      this.value.set(multi ? values : values[0]);
    } else {
      this.value.set(null);
    }

    this.open.set(false);
  }

  protected readonly options: SelectItemOptions = {
    getSelected: item => {
      const transform = this.transform();

      const key = transform.getValue(item);
      if (!key) return false;

      return this.vmap().has(key);
    },
  };

  protected onDocumentClick(e: PointerEvent) {
    if (this.multi()) return;

    const { ref: { nativeElement: elem } } = this;
    const target = e.target as HTMLElement;

    if (elem.contains(target)) return;

    this.open.set(false);
  }

}
