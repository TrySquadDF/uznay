import { getEnv, types } from "mobx-state-tree";

import { search } from "./search";
import API from "./api";

const store = types
  .model({
    API: types.optional(API, {}),
    APIV: types.optional(API, {}),
    search: types.optional(search, {}),
    Recomendation: types.optional(API, {}),
  })
  .actions((self) => ({
    fetchHnalder() {
      try {
        if (getEnv(self).fetchHnalder) return getEnv(self).fetchHnalder();
        else return false;
      } catch (e) {
        console.log(e);
      }
    },
    afterCreate() {
      self.API.init();
      self.APIV.init("/v2/everything", {
        q: "Russia",
        language: "ru",
        pageSize: 7,
      });
      self.Recomendation.init("/v2/top-headlines", {
        country: "ru",
        category: "technology",
        pageSize: 3,
      });
    },
  }));

export default store;
