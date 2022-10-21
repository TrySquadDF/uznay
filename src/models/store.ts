import { types } from "mobx-state-tree";
import API from "./api";

const store = types
  .model({
    API: types.optional(API, {}),
    APIV: types.optional(API, {}),
    sasd: types.maybeNull(types.string),
  })
  .actions((self) => ({
    onChange(string: string) {
      self.sasd = string;
    },
    afterCreate() {
      self.API.init();
      self.APIV.init("/v2/everything", {
        q: "Russia",
        language: "ru",
        pageSize: 5,
      });
      self.sasd = "asdas";
    },
  }));

export default store;
