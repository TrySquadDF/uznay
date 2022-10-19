import { describe } from "vitest";
import { apiGenerator } from "./apigenerator";

describe("Составление запроса к API", () => {
  test("Инициализация top-headlines запроса", () => {
    const { url } = new apiGenerator("/v2/top-headlines", {});
    expect(url).toBe("");
  });
});

//TODO: дописать тест и удалить не нужную функцию parameterAssembly
