import { Component, input, output } from "@angular/core";

import { SelectItem, SelectTransformer } from "../../../../interfaces";

export type SelectItemOptions = {
  getSelected: (item: any) => boolean;
};

@Component({
  selector: 'ngf-select-items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.scss'],
  imports: [],
})
export class NgFluxSelectItems {

  readonly data = input.required<any[]>();
  readonly options = input.required<SelectItemOptions>();
  readonly transform = input<SelectTransformer>();

  readonly select = output<any>();

  protected getItem(item: any): SelectItem {
    const transform = this.transform();
    if (!transform) return item as SelectItem;

    return {
      label: transform.getLabel(item),
      value: transform.getValue(item),
      children: transform.getChildren?.(item) ?? [],
      disabled: transform.isDisabled?.(item) ?? false,
    };
  }

  protected onSelect(item: any) {
    const info = this.getItem(item);
    if (info.disabled) return;

    this.select.emit(item);
  }

}
