import { types } from "mobx-state-tree";
import API from "./api";

export const search = types
  .model("search", {
    params: types.maybeNull(types.string),
    limit: types.number,
    store: types.optional(API, {}),
  })
  .actions((self) => ({
    setSearch(query: string) {
      self.params = query;
      self.store.init("/v2/everything", {
        q: query,
        pageSize: self.limit,
      });
    },
    editLimit(number: number) {
      self.limit = self.limit + number;
      if (self.params) {
        self.store.init("/v2/everything", {
          q: self.params,
          pageSize: self.limit,
        });
      }
    },
  }));
