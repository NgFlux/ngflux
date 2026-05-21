import { Component, input, model, output } from "@angular/core";
import { Pagination, PaginationArgs } from "../../../interfaces";

@Component({
  selector: 'ngf-pagination-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss'],
  imports: [],
})
export class NgFlexPaginationInfo {

  readonly data = input.required<Pagination>();
  readonly callback = output<PaginationArgs>();

  readonly limit = model.required<number>();

}
