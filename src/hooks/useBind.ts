import { ReactNode, RefObject, useEffect, useRef } from "react";
import { useKeyboard } from "./useKeyboard";

export function useBind(ref: RefObject<HTMLInputElement>) {
  useKeyboard("keyup", (ev) => {
    console.log(ev);
  });
}

/**  Принимает параметром Element который нужно привязать и возвращает ссылку на этот элемент
 * @param Element елемент на который необходимо привизать клавишу
 * @param eventCode код клавиши
 * @param typeComponent вариативно меняет собитие если вы используете, что то на подобии CSS IN JS
 */
export function useBindAdvanced<T = any>(
  Element: ReactNode,
  eventCode: string,
  typeComponent?: string
) {
  // const ref = useRef<HTMLInputElement>(Element); // gene <T>

  // useEffect(() => {
  //   if (ref) {
  //     ref.current;
  //   }
  // }, []);

  return Element;
}
