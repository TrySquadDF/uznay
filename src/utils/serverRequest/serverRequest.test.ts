import { getDataFromServer } from "./serverRequest";

describe("serverRequest", async () => {
  beforeEach(() => {
    //@ts-ignore
    fetch.resetMocks();
  });

  test("Запрос Замокан", async () => {
    //@ts-ignore
    fetch.mockResponseOnce(
      JSON.stringify({
        status: "ok",
        totalResults: 30,
        articles: [
          {
            source: {
              id: null,
              name: "Dtf.ru",
            },
            author: "Владик",
            title:
              "God of War Ragnarök вышла на PS4 и PS5 — Релизы на DTF - DTF",
            description:
              "Отправиться в приключение с Кратосом и Атреем можно прямо сейчас.",
            url: "https://dtf.ru/s/release/1436012-god-of-war-ragnaroek-vyshla-na-ps4-i-ps5",
            urlToImage:
              "https://dtf.ru/cover/fb/c/1436012/1667941467/cover.jpg",
            publishedAt: "2022-11-08T21:00:25Z",
            content:
              '.\r\n{"id":1436012,"type":"num","link":"https:\\/\\/dtf.ru\\/s\\/release\\/1436012-god-of-war-ragnaroek-vyshla-na-ps4-i-ps5","gtm":"","prevCount":null,"count":173,"isAuthorized":false} \r\n{"id":1436012,"type… [+327 chars]',
          },
          {
            source: {
              id: null,
              name: "Kommersant.ru",
            },
            author: null,
            title:
              "Умер лидер рок-группы Nazareth Дэн Маккаферти - Коммерсантъ",
            description: "Подробнее на сайте",
            url: "https://www.kommersant.ru/doc/5653054",
            urlToImage:
              "https://iv.kommersant.ru/SocialPics/5653054_26_2291465_1925282574",
            publishedAt: "2022-11-08T19:28:35Z",
            content:
              "- 76 . - Facebook ( Meta). .\r\n Nazareth, Shadettes, 1968 , . 1975 . , Exercises, Razamanaz, Rampant. 1990 Nazareth , .\r\n 2013 - . Rock`n`Roll Telephone. . 5 2022 Nazareth 80 .",
          },
        ],
      })
    );

    const { req } = new getDataFromServer("/v2/everything", {
      q: "Chin",
    });

    const { status } = await req;

    //@ts-ignore
    expect(fetch.mock.calls.at(-1).at(-1)).toBe(
      "https://newsapi.org/v2/everything?q=Chin&apiKey=cd539df3d78540f19031f23fdd853a8d"
    );
  });
});
