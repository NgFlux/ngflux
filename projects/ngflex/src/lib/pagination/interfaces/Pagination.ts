export type Pagination<T = any> = {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: T[];
};

export type PaginationTransformer<T = any> = {
  getCurrentPage: (data: any) => number;
  getFrom: (data: any) => number;
  getLastPage: (data: any) => number;
  getPerPage: (data: any) => number;
  getTo: (data: any) => number;
  getTotal: (data: any) => number;
  getData: (data: any) => T[];
};
