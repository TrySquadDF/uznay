import { category, country, location, q, sources } from "./apiParamsTypes";

export interface ResponsError {
  code: string;
  status: "error";
  message: string;
}

export type query = {
  location: location;
  country: country;
  category: category;
  sources: sources;
  q: q;
  pageSize: number;
  page: number;
};
export type toServer = (prams: Partial<query>) => Promise<any>;
