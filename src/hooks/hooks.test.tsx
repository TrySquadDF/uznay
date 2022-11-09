import React, { RefObject, useEffect } from "react";
import { fireEvent, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useKeyboard } from "./useKeyboard";
import { useBindFocus } from "./useBind";

describe("Hooks", () => {
  test("keyboard hook", () => {
    const events = new Object();
    const doc = vi
      .spyOn(document, "addEventListener")
      .mockImplementation((event, handelr) => {
        //@ts-ignore
        events[event] = handelr;
      });
    const hook = renderHook(() => useKeyboard("keydown"));

    expect(doc).toBeCalled();
    expect(events.hasOwnProperty("keydown")).toBeTruthy();
  });

  test("keyboard hook option", () => {
    const events = new Object();
    const doc = vi
      .spyOn(document, "addEventListener")
      .mockImplementation((event, handelr) => {
        //@ts-ignore
        events[event] = handelr;
      });
    const hook = renderHook(() => useKeyboard("keydown", () => true));

    //@ts-ignore
    const result = events.hasOwnProperty("keydown") ? events["keydown"] : false;

    expect(result).toBeTruthy();
  });

  test("bind hook", () => {
    const events = new Object();

    const doc = vi
      .spyOn(document, "addEventListener")
      .mockImplementation((event, handelr) => {
        //@ts-ignore
        events[event] = handelr;
      });

    const input = document.createElement("input");

    const ref: RefObject<HTMLInputElement> = {
      current: input,
    };

    const hook = renderHook(() => useBindFocus(ref, "Slash"));

    expect(events.hasOwnProperty("keyup")).toBeTruthy();
  });
});
