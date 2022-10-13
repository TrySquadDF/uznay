import { types } from "mobx-state-tree";

const source = types.model("source", {
  id: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
});

const article = types.model("article", {
  source,
  author: types.maybeNull(types.string),
  title: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  url: types.string,
  urlToImage: types.maybeNull(types.string),
  publishedAt: types.string,
  content: types.maybeNull(types.string),
});

export default article;
