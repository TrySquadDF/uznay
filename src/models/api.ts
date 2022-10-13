import { flow, types } from "mobx-state-tree";
import { ResponsError } from "src/types/responsTypes";
import { apiResult, apiError } from "./apiModels";

const fetchArticlesToServer = fetch(
  `https://newsapi.org/v2/top-headlines?country=ru&apiKey=${
    import.meta.env.VITE_API_KEY
  }`
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

const API = types
  .model("API", {
    loading: false,
    error: types.maybeNull(apiError),
    result: types.maybe(apiResult),
  })
  .actions((self) => ({
    init: flow(function* fetchArticles() {
      try {
        self.loading = true;
        const data = yield fetchArticlesToServer;
        self.result = { ...data };
        self.loading = false;
      } catch (e) {
        self.loading = false;
        self.error = { ...(e as ResponsError) };
      }
    }),
    afterCreate() {
      //@ts-ignore
      self.init();
    },
  }));

export default API;
