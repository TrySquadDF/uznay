import React, { ReactNode, RefObject, useEffect, useState } from "react";
import { useKeyboard } from "./useKeyboard";

/**  Фокусирует на элементе по привязки клавиши.`Return`: булевое значение указывающие активен ли фокус.
 * @param ref Ссылка на элемент.
 * @param key Код клавиши.
 */
export function useBindFocus(ref: RefObject<HTMLInputElement>, key: string) {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (document.activeElement === ref.current) {
      setState(true);
    } else {
      setState(false);
    }
  }, [document.activeElement]);

  useKeyboard("keyup", (ev) => {
    if (
      ev.code === key &&
      ref.current &&
      document.activeElement !== ref.current
    ) {
      ref.current.focus();
    }
  });

  return state;
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
