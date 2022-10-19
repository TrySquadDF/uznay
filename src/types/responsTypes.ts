import {
  category,
  country,
  language,
  location,
  q,
  sortBy,
  sources,
} from "./apiParamsTypes";

export interface ResponsError {
  code: string;
  status: "error";
  message: string;
}

export type topHeadlinesSourcesQuery = {
  country: country;
  language: language;
  category: category;
};

export type topHeadlinesQuery = {
  country: country;
  category: category;
  location: "/v2/top-headlines";
} & query;

export type everythingQuery = {
  language: language;
  sortBy: sortBy;
} & query;

export type query = {
  q: q;
  sources: sources;
  pageSize: number;
  page: number;
};

export type toServer = (prams: Partial<topHeadlinesQuery>) => Promise<any>;
