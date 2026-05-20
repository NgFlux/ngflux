import { Component, computed, input, output } from "@angular/core";
import { NgFlexPaginationInfo } from "../info/info.component";
import { Pagination, PaginationTransformer } from "../../interfaces/Pagination";

@Component({
  selector: 'ngf-pagination',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  imports: [
    NgFlexPaginationInfo,
  ],
})
export class NgFlexPagination {

  readonly data = input.required<any>();
  readonly transform = input<PaginationTransformer>();

  readonly callback = output<number>();

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

}
