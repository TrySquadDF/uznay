import { types } from "mobx-state-tree";
import article from "./article";

export const apiError = types.model("ErrorApi", {
  status: types.union(types.literal("error")),
  message: types.string,
  code: types.string,
});

export const apiResult = types.model("ResultApi", {
  status: types.union(types.literal("ok")),
  totalResults: types.number,
  articles: types.array(article),
});
