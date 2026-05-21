import { Component, computed, effect, input, output, signal, untracked } from "@angular/core";

import { NgFlexPaginationInfo } from "./info/info.component";
import { Pagination, PaginationArgs, PaginationTransformer } from "../../interfaces";

@Component({
  selector: 'ngf-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
  imports: [
    NgFlexPaginationInfo,
  ],
})
export class NgFlexPagination {

  readonly data = input.required<any>();
  readonly preload = input<boolean>(true);
  readonly transform = input<PaginationTransformer>();

  readonly callback = output<PaginationArgs>();

  readonly value = computed<Pagination>(() => {
    const data = this.data();
    const transform = this.transform();

    if (!transform) return data as Pagination;

    return {
      current_page: transform.getCurrentPage(data),
      last_page: transform.getLastPage(data),
      per_page: transform.getPerPage(data),
      from: transform.getFrom(data),
      to: transform.getTo(data),
      total: transform.getTotal(data),
      data: transform.getData(data),
    };
  });

  readonly limit = signal<number>(10);

  constructor() {
    let init = false;

    effect(() => {
      const limit = this.limit();
      const preload = untracked(this.preload);
      const { current_page: page } = untracked(this.value);

      if (preload || init) {
        this.callback.emit({ limit, page });
      }

      init = true;
    });
  }

}
