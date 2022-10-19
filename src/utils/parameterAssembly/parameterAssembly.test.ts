import { query } from "@/types/responsTypes";
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

//TODO: удалить тест и функцию
