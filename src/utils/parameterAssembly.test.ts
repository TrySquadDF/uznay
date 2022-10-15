import { query } from "@/types/responsTypes";
import { describe, test, expect } from "vitest";
import { parameterAssembly } from "./parameterAssembly";

describe("Составление запроса к API", () => {
  const params: Partial<query> = {
    location: "/v2/top-headlines",
    country: "ru",
  };

  test("Конфигурация запроса", () => {
    expect(parameterAssembly(params)).toBe("/v2/top-headlines?country=ru");
  });
});
