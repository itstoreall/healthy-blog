import { useState } from "react";
import { IFilterBarProps, InputHandler } from "./types";
import { middleGreyHover } from "../../theme";
import { filterConfig, inputConfig } from "./config";
import { setOrder } from "./utils";
import s from "./FilterBar.module.scss";
import EyeIcon from "./icons/EyeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import ArrowIcon from "./icons/ArrowIcon";
import SearchInput from "./Search/SearchInput";
import { IArticle } from "@/interfaces";

const FilterBar = ({ initArts, arts, setArts }: IFilterBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { labels, orders } = filterConfig;
  const date = labels.date;
  const views = labels.views;
  // const search = labels.search;
  const up = orders.up;
  const down = orders.down;

  // ------- Sort:

  const sortArticles = (label: string) => {
    if (!arts) return;

    const raw = inputValue ? arts.articles : initArts;
    const reverseOrder = arts.order === up ? down : up;

    // by Date:
    if (label === date) {
      const revesed = raw.reverse();
      setArts({
        label,
        order:
          !arts.label || arts.label === date
            ? reverseOrder
            : setOrder(
                date,
                revesed[0].timestamp,
                revesed[revesed.length - 1].timestamp
              ),
        articles: revesed,
      });
    }

    // by Views:
    if (label === views) {
      const sortedByViews = (order: string) =>
        raw
          .slice()
          .sort((a, b) =>
            order === up
              ? Number(a.views) - Number(b.views)
              : Number(b.views) - Number(a.views)
          );

      const sorted = sortedByViews(arts.order);

      setArts({
        label,
        order:
          !arts.label || arts.label === views
            ? reverseOrder
            : setOrder(views, sorted[0].views, sorted[sorted.length - 1].views),
        articles: sortedByViews(arts.order),
      });
    }
  };

  // ------- Search:

  const searchArticles = (value: string) => {
    const normalValue = value.toLowerCase();
    setArts({
      label: "",
      order: "",
      articles: initArts.filter(
        (art: IArticle) =>
          art.tags?.find((el) => {
            const normalTag = el.slice(0, value.length).toLowerCase();
            return normalTag === normalValue;
          }) && art
      ),
    });
  };

  const inputHandler: InputHandler = ({ label, e }) => {
    const { value } = e.target;
    setInputValue(value);
    searchArticles(value);
  };

  return (
    <div className={s.filterBar}>
      <button
        className={`${s.filterButton} ${s[arts.label === views ? views : ""]}`}
        onClick={() => sortArticles(views)}
      >
        <EyeIcon fill={middleGreyHover} size={"m"} />
        <ArrowIcon
          fill={middleGreyHover}
          direction={arts.label === views ? arts.order : down}
          size={"m"}
        />
      </button>

      <button
        className={`${s.filterButton} ${s[arts.label === date ? date : ""]}`}
        onClick={() => sortArticles(date)}
      >
        <CalendarIcon fill={middleGreyHover} size={"m"} />
        <ArrowIcon
          fill={middleGreyHover}
          direction={arts.label === date ? arts.order : down}
          size={"m"}
        />
      </button>

      <div className={s.searchInputBlock}>
        <SearchInput
          label={inputConfig.searchByHash.label}
          value={inputValue}
          placeholder="Пошук..."
          inputHandler={inputHandler}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default FilterBar;
