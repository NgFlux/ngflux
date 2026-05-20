import { Component, input, output } from "@angular/core";
import { Pagination } from "../../interfaces/Pagination";

@Component({
  selector: 'ngf-pagination-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss'],
  imports: [],
})
export class NgFlexPaginationInfo {

  readonly data = input.required<Pagination>();
  readonly callback = output<number>();

}
