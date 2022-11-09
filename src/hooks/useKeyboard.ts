import React, { useEffect } from "react";

/** Вешает обработчик на событие указанное в аргументе хука
 *
 * @param event событе из `addEventListener` `KeyboardEvent`
 * @param eventHandler событие обработчик. В аргумент функции передаётся event типа `KeyboardEvent`
 */

export const useKeyboard = (
  event: "keyup" | "keydown" | "keypress",
  eventHandler?: (ev: KeyboardEvent) => void
): void => {
  const defualtEventHandler = (ev: KeyboardEvent) => {
    console.log({ "[useKeyboard eventHandler]": ev });
  };

  useEffect(() => {
    document.addEventListener(
      event,
      (e) => {
        if (eventHandler) {
          return eventHandler(e);
        } else {
          defualtEventHandler(e);
        }
      },
      true
    );

    return document.removeEventListener(
      event,
      (e) => {
        if (eventHandler) {
          return eventHandler(e);
        } else {
          defualtEventHandler(e);
        }
      },
      true
    );
  }, []);
};
