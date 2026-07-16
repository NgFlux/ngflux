import { Component, inject, input, output } from "@angular/core";

import { SelectItem, SelectTransformer } from "../../../../interfaces";

export type SelectItemOptions = {
  getSelected: (item: any) => boolean;
};

@Component({
  selector: 'ngf-select-items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.scss'],
  imports: [],
  host: {
    '[class.has-parent]': '!!parent',
  },
})
export class NgFluxSelectItems {

  protected readonly parent = inject(NgFluxSelectItems, {
    optional: true,
    skipSelf: true,
  });

  readonly data = input.required<any[]>();
  readonly options = input.required<SelectItemOptions>();
  readonly transform = input.required<SelectTransformer>();

  readonly select = output<any>();

  protected getItem(item: any): SelectItem {
    const transform = this.transform();

    return {
      label: transform.getLabel(item),
      value: transform.getValue(item),
      children: transform.getChildren?.(item) ?? [],
      disabled: transform.isDisabled?.(item) ?? false,
    };
  }

  protected onSelect(item: any, e?: PointerEvent) {
    const info = this.getItem(item);
    if (info.disabled) return;

    e?.stopPropagation();

    this.select.emit(item);
  }

}
