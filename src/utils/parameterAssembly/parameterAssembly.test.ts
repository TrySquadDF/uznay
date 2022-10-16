import { query } from "@/types/responsTypes";
import { describe, test, expect } from "vitest";
import { parameterAssembly } from "./parameterAssembly";

const params: Partial<query> = {
  location: "/v2/top-headlines",
  country: "ru",
};

describe("Составление запроса к API", () => {
  test("Конфигурация запроса", () => {
    expect(parameterAssembly(params)).toBe("/v2/top-headlines?country=ru");
  });
});
