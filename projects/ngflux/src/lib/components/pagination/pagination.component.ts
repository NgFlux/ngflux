import {
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  untracked,
  ChangeDetectionStrategy,
} from '@angular/core';

import { NgFluxPaginationInfo } from './info/info.component';
import { NGF_CONFIG, Pagination, PaginationInfo, PaginationTransformer } from '../../interfaces';

@Component({
  selector: 'ngf-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
  imports: [NgFluxPaginationInfo],
})
export class NgFluxPagination {
  private readonly config = inject(NGF_CONFIG);

  readonly data = input.required<any>();
  readonly preload = input<boolean>(this.config.pagination?.preload ?? false);
  readonly transform = input<PaginationTransformer>();

  readonly page = model<number>(1);
  readonly limit = model<number>(this.config.pagination?.limit ?? 10);
  readonly limitOptions = input<number[]>(this.config.pagination?.limitOptions ?? [5, 10, 20, 30, 40, 50]);

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

  private readonly init = signal(false);

  constructor() {
    effect(() => {
      const value = untracked(this.value);
      this.page.set(value.currentPage);
    });

    effect(() => {
      const page = this.page(), limit = this.limit();
      const preload = untracked(this.preload);

      const init = untracked(this.init);
      if (!init) this.init.set(true);

      if (preload || init) {
        this.callback.emit({ limit, page });
      }
    });
  }
}
