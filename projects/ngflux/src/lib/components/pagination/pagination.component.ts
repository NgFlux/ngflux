import { Component, computed, effect, inject, input, model, output, signal, untracked } from "@angular/core";

import { NgFluxPaginationInfo } from "./info/info.component";
import { NGF_CONFIG, Pagination, PaginationInfo, PaginationTransformer } from "../../interfaces";

@Component({
  selector: 'ngf-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
  imports: [
    NgFluxPaginationInfo,
  ],
})
export class NgFluxPagination {

  private readonly config = inject(NGF_CONFIG);

  readonly data = input.required<any>();
  readonly preload = input<boolean>(this.config.pagination?.preload ?? false);
  readonly transform = input<PaginationTransformer>();

  readonly limit = model<number>(this.config.pagination?.limit ?? 10);
  readonly limitEntries = input<number[]>(this.config.pagination?.limitEntries ?? [5, 10, 20, 30, 40, 50]);

  readonly callback = output<PaginationInfo>();

  protected readonly value = computed<Pagination>(() => {
    const { config } = this;

    const data = this.data();
    const transform = this.transform() ?? config.pagination?.transform;

    if (!transform) return data as Pagination;

    return {
      currentPage: transform.getCurrentPage(data),
      lastPage: transform.getLastPage(data),
      perPage: transform.getPerPage(data),
      from: transform.getFrom(data),
      to: transform.getTo(data),
      total: transform.getTotal(data),
      data: transform.getData(data),
    };
  });

  constructor() {
    let init = false;

    effect(() => {
      const limit = Number(this.limit());
      const preload = untracked(this.preload);
      const { currentPage: page } = untracked(this.value);

      if (preload || init) {
        this.callback.emit({ limit, page });
      }

      init = true;
    });
  }

}
