import { describe } from "vitest";
import { apiGenerator } from "./apigenerator";

describe("Составление запроса к API", () => {
  test("Инициализация everything запроса с неправильно указанными входными значениями", () => {
    const { url } = new apiGenerator("/v2/everything", {
      q: "",
    });
    expect(url).toBe("/v2/everything?q=Russian"); // Получаем значение по умолчанию.
  });
  test("Инициализация корректного everything запроса", () => {
    const { url } = new apiGenerator("/v2/everything", {
      q: "bitcoin",
      language: "ru",
      sortBy: "publishedAt",
    });

    expect(url).toBe("/v2/everything?q=bitcoin&language=ru&sortBy=publishedAt"); // Получаем значение указанные в опиции генератора.
  });
  test("Инициализация top-headlines запроса с неправильно указанными входными значениями", () => {
    const { url } = new apiGenerator("/v2/top-headlines", {
      sources: "business-insider",
      country: "ru",
      category: "business",
    });
    expect(url).toBe("/v2/top-headlines?sources=business-insider"); // Получаем ведущие значение полученное аргументами генератора, при этом откидывая несовместимые значения.
  });
  test("Инициализация корректного top-headlines запроса", () => {
    const { url } = new apiGenerator("/v2/top-headlines", {
      country: "ru",
      category: "business",
    });
    expect(url).toBe("/v2/top-headlines?country=ru&category=business"); // Получаем значение указанные в опиции генератора.
  });
  test("Инициализация корректного top-headlines:sources запроса", () => {
    const { url } = new apiGenerator("/v2/top-headlines/sources", {
      country: "ru",
      category: "business",
      language: "ru",
    });
    expect(url).toBe(
      "/v2/top-headlines/sources?country=ru&category=business&language=ru"
    ); // Получаем значение указанные в опиции генератора.
  });
});

//TODO: дописать тест и удалить не нужную функцию parameterAssembly
