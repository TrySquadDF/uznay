import {
  category,
  country,
  everything,
  language,
  location,
  q,
  sortBy,
  sources,
  topHeadlinesSources,
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
  to: string; //  This should be in ISO 8601 format (e.g. 2022-10-19 or 2022-10-19T19:16:06)
  from: string; //  ↑
  domains: string;
  excludeDomains: string;
  searchIn: string; // The possible options are: title , description ,content Multiple options can be specified by separating them with a comma, for example: title,content.
} & query;

export type query = {
  q: q;
  sources: sources;
  pageSize: number;
  page: number;
};

export type toServer = (
  type: location,
  prams: Partial<topHeadlinesQuery | everythingQuery | topHeadlinesSourcesQuery>
) => Promise<any>;

export type d = (param: aca | bas | cas) => Promise<any>;
// export type a = (
//   type: topHeadlines,
//   params: Partial<topHeadlinesQuery>
// ) => Promise<any>;
// export type c = (
//   type: topHeadlinesSources,
//   params: Partial<topHeadlinesSourcesQuery>
// ) => Promise<any>;

export type aca = {
  type: everything;
  params: Partial<everythingQuery>;
};

export type bas = {
  type: topHeadlinesSources;
  params: Partial<topHeadlinesSourcesQuery>;
};

export type cas = {
  type: topHeadlinesSources;
  params: Partial<topHeadlinesSourcesQuery>;
};
