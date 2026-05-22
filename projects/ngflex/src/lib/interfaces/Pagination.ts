export type Pagination<T = any> = {
  currentPage: number;
  from: number;
  lastPage: number;
  perPage: number;
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

export type PaginationInfo = {
  limit: number;
  page: number;
};
