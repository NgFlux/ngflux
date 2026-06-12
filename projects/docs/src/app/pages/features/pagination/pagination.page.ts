import { Component } from '@angular/core';
import { DocCodeComponent, DocCodeGroupComponent, DocSectionComponent } from '@docs/core';

@Component({
  selector: 'app-features-pagination-page',
  templateUrl: 'pagination.page.html',
  styleUrls: ['pagination.page.scss'],
  imports: [
    DocCodeComponent,
    DocCodeGroupComponent,
    DocSectionComponent,
  ],
})
export class FeaturesPaginationPage {

  protected readonly usageCode = `
import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFluxPagination, PaginationInfo, PaginationTransformer } from '@ngflux/ngflux';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NgFluxPagination],
  template: \`
    <ngf-pagination [data]="payload()"  [preload]="true" [limitOptions]="[5, 10, 20]" [transform]="transform" (callback)="onPageChange($event)">
      <div class="table-container">
        ...
      </div>
    </ngf-pagination>
  \`
})
export class UserTableComponent {
  private http = inject(HttpClient);

  // Holds the current raw data structure from the API
  protected payload = signal<any>(null);

  // Custom inline transformer mapping unique server properties
  protected transform: PaginationTransformer = {
    getCurrentPage: data => data.current_page,
    getFrom: data => data.from,
    getTo: data => data.to,
    getLastPage: data => data.last_page,
    getPerPage: data => data.per_page,
    getTotal: data => data.total,
    getData: data => data.entries,
  };

  // Triggers manually on click, or on mount due to [preload]="true"
  onPageChange(event: PaginationInfo) {
    const url = \`https://api.example.com/users?page=\${event.page}&limit=\${event.limit}\`;

    this.http.get(url).subscribe(response => {
      this.payload.set(response);
    });
  }
}
  `;

  protected readonly configCode = `
import { ApplicationConfig } from '@angular/core';
import { provideNgFlux, NgFluxConfig } from '@ngflux/ngflux';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgFlux({
      // Pagination Options
      pagination: {
        preload: true,
        limit: 15,
        limitOptions: [15, 30, 50, 100],
        transform: {
          getCurrentPage: data => 1,
          getFrom: data => 1,
          getTo: data => 20,
          getLastPage: data => 5,
          getPerPage: data => 20,
          getTotal: data => 95,
          getData: data => [],
        }
      },
    }),
    ...
  ]
};
  `;

}
