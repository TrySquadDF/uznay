import {
  everything,
  location,
  topHeadlines,
  topHeadlinesSources,
} from "@/types/apiParamsTypes";
import {
  everythingQuery,
  topHeadlinesQuery,
  topHeadlinesSourcesQuery,
} from "@/types/responsTypes";

export class apiGenerator {
  public url: string | null;
  constructor(
    header: everything,
    option: { q: string } & Partial<everythingQuery>
  );
  constructor(header: topHeadlines, option: Partial<topHeadlinesQuery>);
  constructor(
    header: topHeadlinesSources,
    option: Partial<topHeadlinesSourcesQuery>
  );
  constructor(
    header: location,
    option: Partial<topHeadlinesQuery> | Partial<everythingQuery>
  ) {
    this.url = null;

    if (header === "/v2/everything") this.everything(header, option);
    if (header === "/v2/top-headlines/sources") this.init(header, option);
    if (header === "/v2/top-headlines") this.topheadlines(header, option);
  }

  optionsHandler({ ...option }) {
    const array = [];
    for (let params in option) {
      if (params === "country" || params === "category") {
        if (!Boolean(option["sources"]))
          array.push(`${params}=${option[params]}`);
      } else {
        array.push(`${params}=${option[params]}`);
      }
    }
    return array;
  }

  assembler(array: any[]) {
    return array.reduce((previousValue, currentValue, currentIndex) => {
      return previousValue
        ? `${previousValue}&${currentValue}`
        : `${currentValue}`;
    });
  }

  init(header: topHeadlinesSources, { ...option }) {
    this.url = `${header}?${this.assembler(this.optionsHandler(option))}`;
  }

  everything(header: everything, { ...option }) {
    const { q } = option as { q: string } & Partial<everythingQuery>;
    if (!Boolean(q.trim())) option = { q: "Russian" };
    this.url = `${header}?${this.assembler(this.optionsHandler(option))}`;
  } // удалить

  topheadlines(header: topHeadlines, { ...option }) {
    if (JSON.stringify(option) === "{}")
      option = {
        country: "ru",
      } as Partial<topHeadlinesQuery>;
    this.url = `${header}?${this.assembler(this.optionsHandler(option))}`;
  }
}
