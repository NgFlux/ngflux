import { Data, Route } from "@angular/router";

export type NgFluxRoutes = NgFluxRoute[];

export type NgFluxRoute = Route & {
  addParentTitle?: boolean;
  parentTitleSeparator?: string;

  description?: string;
  keywords?: string | string[];

  getTitle?: (data: Data) => string;
  getDescription?: (data: Data) => string;
  getKeywords?: (data: Data) => string;

  children?: NgFluxRoutes;
};
