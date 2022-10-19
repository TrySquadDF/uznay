import { types } from "mobx-state-tree";
import API from "./api";

const store = types
  .model({
    API: types.optional(API, {}),
    APIV: types.optional(API, {}),
  })
  .actions((self) => ({
    init: () => {},
    afterCreate() {
      self.API.init();
      self.APIV.init({ country: "ru" });
    },
  }));

export default store;
