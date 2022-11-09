import {
  everythingQuery,
  ResponsError,
  topHeadlinesQuery,
} from "@/types/responsTypes";
import { flow, types } from "mobx-state-tree";
import { apiResult, apiError } from "./apiModels";
import { getDataFromServer } from "../utils/serverRequest/serverRequest";
import { everything, topHeadlines } from "@/types/apiParamsTypes";

const fetchArticlesToServer = async (
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

// TODO: test api error

const API = types
  .model("API", {
    loading: false,
    error: types.maybeNull(apiError),
    result: types.maybe(apiResult),
  })
  .actions((self) => ({
    init: flow(function* fetchArticles(
      type: topHeadlines | everything = "/v2/top-headlines",
      args?:
        | Partial<topHeadlinesQuery>
        | ({ q: string } & Partial<everythingQuery>),
      callback?: (data: any[]) => void
    ) {
      try {
        let option:
          | Partial<topHeadlinesQuery>
          | ({ q: string } & Partial<everythingQuery>) =
          args === undefined
            ? type === "/v2/everything"
              ? { q: "" }
              : {}
            : args;

        self.loading = true;
        // @ts-ignore
        const data = yield fetchArticlesToServer(type, option);
        self.result = callback ? callback({ ...data }) : { ...data };
        self.loading = false;
      } catch (e) {
        self.loading = false;

        self.error = e
          ? Object.keys(e).length === 0
            ? null
            : { ...(e as ResponsError) }
          : null;
      }
    }),
  }));

export default API;
