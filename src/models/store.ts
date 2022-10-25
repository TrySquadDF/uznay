import { types } from "mobx-state-tree";
import API from "./api";

const store = types
  .model({
    API: types.optional(API, {}),
    APIV: types.optional(API, {}),
  })
  .actions((self) => ({
    afterCreate() {
      self.API.init();
      self.APIV.init("/v2/everything", {
        q: "Russia",
        language: "ru",
        pageSize: 7,
      });
    },
  }));

export default store;
