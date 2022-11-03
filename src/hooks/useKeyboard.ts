import { useEffect } from "react";

/** Вешает обработчик на событие указанное в аргументе хука
 *
 * @param event событе из `addEventListener` `KeyboardEvent`
 * @param eventHandler событие обработчик. В аргумент функции передаётся event типа `KeyboardEvent`
 */

export const useKeyboard = (
  event: "keyup" | "keydown" | "keypress",
  eventHandler?: (ev: KeyboardEvent) => void
): void => {
  const defualtEventHandler = () => {
    console.log("[useBind eventHandler]");
  };

  useEffect(() => {
    document.addEventListener(
      event,
      (e) => {
        if (eventHandler) {
          eventHandler(e);
        } else {
          defualtEventHandler();
        }
      },
      true
    );

    return document.removeEventListener(
      event,
      (e) => {
        if (eventHandler) {
          eventHandler(e);
        } else {
          defualtEventHandler();
        }
      },
      true
    );
  }, []);
};
