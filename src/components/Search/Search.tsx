import { useKeyboard } from "@/hooks/useKeyboard";
import { useEffect, useRef } from "react";
import { InputStyle } from "./search.style";

export const Search = () => {
  const [keypress, setKeypress] = useKeyboard("Backslash"); // todo: меняется ли стейт ?
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [keypress]);

  return <InputStyle ref={ref}></InputStyle>;
};
