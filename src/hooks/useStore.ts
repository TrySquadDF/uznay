import { useContext } from "react";
import { StoreContext } from "../main.js";

export default function useStore() {
  return useContext(StoreContext);
}
