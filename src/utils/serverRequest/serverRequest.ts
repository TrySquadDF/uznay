import {
  everything,
  location,
  topHeadlines,
  topHeadlinesSources,
} from "@/types/apiParamsTypes";
import {
  everythingQuery,
  ResponsError,
  topHeadlinesQuery,
  topHeadlinesSourcesQuery,
} from "@/types/responsTypes";
import { apiGenerator } from "../apiGenerator/apigenerator";

export class getDataFromServer {
  public req!: Promise<any>;

  constructor(
    type: everything,
    params: { q: string } & Partial<everythingQuery>
  );
  constructor(header: topHeadlines, option: Partial<topHeadlinesQuery>);
  constructor(
    type: topHeadlinesSources,
    params: Partial<topHeadlinesSourcesQuery>
  );
  constructor(
    type: location,
    params:
      | Partial<topHeadlinesQuery>
      | ({ q: string } & Partial<everythingQuery>)
      | Partial<topHeadlinesSourcesQuery>
  ) {
    if (type === "/v2/everything") {
      const { url } = new apiGenerator(
        "/v2/everything",
        params as { q: string } & Partial<everythingQuery>
      );
      this.req = this.getPromis(
        `${import.meta.env.VITE_API_URL}${url!}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
    }
    if (type === "/v2/top-headlines") {
      const { url } = new apiGenerator(
        "/v2/top-headlines",
        params as Partial<topHeadlinesQuery>
      );
      this.req = this.getPromis(
        `${import.meta.env.VITE_API_URL}${url!}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
    }
    if (type === "/v2/top-headlines/sources") {
      const { url } = new apiGenerator(
        "/v2/top-headlines/sources",
        params as Partial<topHeadlinesSourcesQuery>
      );
      this.req = this.getPromis(
        `${import.meta.env.VITE_API_URL}${url!}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
    }
  }

  getPromis(url: string) {
    return fetch(url)
      .then((e) => {
        if (e.ok) {
          return e.json();
        } else {
          throw e;
        }
      })
      .catch(async (e) => {
        return await e.json().then((e: ResponsError) => {
          throw e;
        });
      });
  }
}
