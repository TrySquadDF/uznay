import { useBind } from "@/hooks/useBind";
import { useEffect, useRef } from "react";
import { InputStyle } from "./search.style";

export const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  useBind(ref);

  useEffect(() => {}, []);

  return <InputStyle ref={ref}></InputStyle>;
};
