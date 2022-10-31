import { types } from "mobx-state-tree";
import API from "./api";
import { search } from "./search";

const store = types
  .model({
    API: types.optional(API, {}),
    APIV: types.optional(API, {}),
    search: types.optional(search, { limit: 15 }),
    Recomendation: types.optional(API, {}),
  })
  .actions((self) => ({
    afterCreate() {
      self.API.init();
      self.APIV.init("/v2/everything", {
        q: "Russia",
        language: "ru",
        pageSize: 6,
      });
      self.Recomendation.init("/v2/top-headlines", {
        country: "ru",
        category: "technology",
        pageSize: 3,
      });
    },
  }));

export default store;
