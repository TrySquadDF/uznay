import { useEffect, useState } from "react";

export const useKeyboard = (
  eventCode: string
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [keypress, setKeypress] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === eventCode) {
        if (!keypress) {
          console.log(keypress);
          setKeypress((state) => !state);
        }
      }
    });

    return document.removeEventListener("keydown", (event) => {
      if (event.code === eventCode) {
        setKeypress(false);
      }
    });
  }, []);

  return [keypress, setKeypress];
};
