import { types } from "mobx-state-tree";
import API from "./api";

export const search = types
  .model("search", {
    params: types.maybeNull(types.string),
    limit: types.optional(types.number, 10),
    store: types.optional(API, {}),
  })
  .actions((self) => ({
    setSearch(query: string) {
      if (self.params !== query || !self.store.result) {
        self.store.init("/v2/everything", {
          q: query,
          pageSize: self.limit,
        });
      }
      self.params = query;
    },
    editLimit(number: number) {
      if (self.params) {
        self.limit =
          self.limit + number === self.store.result?.totalResults
            ? self.store.result.totalResults
            : self.limit + number;
        self.store.init("/v2/everything", {
          q: self.params,
          pageSize: self.limit,
        });
      }
    },
  }));
