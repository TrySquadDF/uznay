import { ReactNode, RefObject } from "react";
import { useKeyboard } from "./useKeyboard";

/**  Фокуисруетется на элементе по привязки клавиши.
 * @param ref Ссылка на элемент.
 * @param key Код клавиши.
 */
export function useBindFocus(ref: RefObject<HTMLInputElement>, key: string) {
  useKeyboard("keyup", (ev) => {
    if (
      ev.code === key &&
      ref.current &&
      document.activeElement !== ref.current
    ) {
      ref.current.focus();
    }
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
