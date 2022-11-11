import { everythingQuery, topHeadlinesQuery } from "@/types/responsTypes";
import { getDataFromServer } from "../serverRequest/serverRequest";

export const fetchArticlesToServer = async (
  type: "/v2/top-headlines" | "/v2/everything",
  params:
    | ({ q: string } & Partial<everythingQuery>)
    | Partial<topHeadlinesQuery>
) => {
  if (type === "/v2/everything") {
    const { req } = new getDataFromServer(
      "/v2/everything",
      params as { q: string } & Partial<everythingQuery>
    );
    return req;
  } else {
    const { req } = new getDataFromServer("/v2/top-headlines", params);
    return req;
  }
};
