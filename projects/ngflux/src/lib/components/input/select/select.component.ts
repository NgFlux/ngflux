import { booleanAttribute, Component, computed, input, InputSignal, InputSignalWithTransform, model, ModelSignal, OutputRef, signal } from "@angular/core";
import { DisabledReason, FormValueControl, ValidationError, WithOptionalFieldTree } from "@angular/forms/signals";
import { FormsModule } from "@angular/forms";
import { KeyValuePipe } from "@angular/common";

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
    KeyValuePipe,
  ],
  host: {
    '(click)': '$event.stopPropagation()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class NgFluxSelect<V = any> implements FormValueControl<V | V[] | null> {

  readonly data = input.required<any[]>();
  readonly transform = input<SelectTransformer<any, V>>();
  readonly block = input(false, { transform: booleanAttribute });
  readonly multi = input(false, { transform: booleanAttribute });
  readonly placeholder = input<string>();

  protected readonly mapper = computed(() => {
    const data = this.data();
    const transform = this.transform();

    const value = new Map<V, any>();

    for (let item of data) {
      const key = transform?.getValue(item) ?? (item as Item<V>).value;
      if (!key) continue;

      value.set(key, item);
    }

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

    const items = Array.from(this.vmap().values());
    if (!items.length) return placeholder;

    const transform = this.transform();
    const first = items.splice(0, 1).at(0);

    let text = transform?.getLabel(first) ?? (first as Item).label ?? '';
    if (items.length) text += ` + ${items.length.toLocaleString()} more`;

    return text;
  });

  private doSearch(text: string, data: any[]) {
    const transform = this.transform();

    return data.filter(item => {
      let children = transform?.getChildren?.(item) ?? (data as Item).children ?? [];

      children = this.doSearch(text, children);
      if (children.length) return true;

      const label = this.getLabel(item);
      return label.includes(text);
    });
  }

  protected getLabel(item: any) {
    return this.transform()?.getLabel(item) ?? (item as Item).label ?? '';
  }

  protected toggleOpen() {
    if (this.multi()) return;
    this.open.update(v => !v);
  }

  protected toggle(item: any) {
    const multi = this.multi();
    const transform = this.transform();
    const vmap = new Map(this.vmap());

    const key = transform?.getValue(item) ?? (item as Item<V>).value;
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

      const key = transform?.getValue(item) ?? (item as Item<V>).value;
      if (!key) return false;

      return this.vmap().has(key);
    },
  };

  protected onDocumentClick(e: PointerEvent) {
    if (this.multi()) return;
    this.open.set(false);
  }

}
