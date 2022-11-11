import { createContext, useContext } from "react";
import store from "src/models/store.js";

export const model = store.create();
export const StoreContext = createContext(model);

export default function useStore() {
  return useContext(StoreContext);
}
