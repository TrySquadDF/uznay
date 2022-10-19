import { parameterAssembly } from "@/utils/parameterAssembly/parameterAssembly";
import {
  query,
  ResponsError,
  topHeadlinesQuery,
  toServer,
} from "@/types/responsTypes";
import { flow, types } from "mobx-state-tree";
import { apiResult, apiError } from "./apiModels";

const fetchArticlesToServer: toServer = async ({
  country = "ru",
  location = "/v2/top-headlines",
  ...args
}) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}${parameterAssembly({
      country,
      location,
      ...args,
    })}&apiKey=${import.meta.env.VITE_API_KEY}`
  )
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
};

const API = types
  .model("API", {
    loading: false,
    error: types.maybeNull(apiError),
    result: types.maybe(apiResult),
  })
  .actions((self) => ({
    init: flow(function* fetchArticles(
      args: Partial<topHeadlinesQuery> | undefined = {}
    ) {
      try {
        self.loading = true;
        const data = yield fetchArticlesToServer(args);
        self.result = { ...data };
        self.loading = false;
      } catch (e) {
        self.loading = false;
        self.error = { ...(e as ResponsError) };
      }
    }),
  }));

export default API;
