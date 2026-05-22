import { Component, computed, inject, input, model, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Pagination, PaginationInfo } from "../../../interfaces";

@Component({
  selector: 'ngf-pagination-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss'],
  imports: [
    FormsModule,
  ],
})
export class NgFlexPaginationInfo {

  readonly data = input.required<Pagination>();
  readonly callback = output<PaginationInfo>();

  readonly limit = model.required<number>();
  readonly limitEntries = input.required<number[]>();

  protected readonly info = computed(() => {
    const data = this.data();

    const from = data.from.toLocaleString();
    const to = data.to.toLocaleString();
    const total = data.total.toLocaleString();

    return `${from} - ${to} of ${total}`;
  });

  protected readonly disablePrev = computed(() => {
    const data = this.data();
    return data.currentPage <= 1;
  });

  protected readonly disableNext = computed(() => {
    const data = this.data();
    return data.currentPage >= data.lastPage;
  });

  protected prev() {
    const data = this.data();

    this.callback.emit({
      page: data.currentPage - 1,
      limit: data.perPage,
    });
  }

  protected next() {
    const data = this.data();

    this.callback.emit({
      page: data.currentPage + 1,
      limit: data.perPage,
    });
  }

}
