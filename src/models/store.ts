import { types } from "mobx-state-tree";
import API from "./api";

const store = types
  .model({
    API: types.optional(API, {}),
  })
  .actions(() => ({}));

export default store;
