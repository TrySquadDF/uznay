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

export interface Respons {
  status: "ok";
  totalResults: Number;
  articles: article;
}

export type source = {
  id: string | null;
  name: string | null;
};

export type article = {
  source: source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

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
