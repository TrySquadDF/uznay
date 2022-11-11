import {
  everythingQuery,
  ResponsError,
  topHeadlinesQuery,
} from "@/types/responsTypes";
import { flow, getParent, types } from "mobx-state-tree";
import { apiResult, apiError } from "./apiModels";
import { everything, topHeadlines } from "@/types/apiParamsTypes";
import { fetchArticlesToServer } from "../utils/fetchArticlesToServer/fetchArticlesToServer";

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
        const env = getParent(self).fetchHnalder();

        const data = Boolean(env)
          ? //@ts-ignore
            env
          : yield fetchArticlesToServer(type, option);
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
