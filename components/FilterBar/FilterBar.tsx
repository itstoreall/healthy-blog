import { IFilterBarProps } from "./types";
import { middleGreyHover } from "../../theme";
import filterCfg from "./config";
import { setOrder } from "./utils";
import s from "./FilterBar.module.scss";
import Eye from "./Eye";
import CalendarIcon from "./CalendarIcon";
import ArrowIcon from "./ArrowIcon";

const FilterBar = ({ initArts, arts, setArts }: IFilterBarProps) => {
  const { labels, orders } = filterCfg;
  const date = labels.date;
  const views = labels.views;
  const up = orders.up;
  const down = orders.down;

  const sortArticles = (label: string) => {
    if (!arts) return;

    const raw = initArts;
    const reverseOrder = arts.order === up ? down : up;

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

  // console.log(0, "arts", arts);

  return (
    <div className={s.filterBar}>
      <button
        className={`${s.filterButton} ${s[arts.label === views ? views : ""]}`}
        onClick={() => sortArticles(views)}
      >
        <Eye fill={middleGreyHover} size={"m"} />
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
    </div>
  );
};

export default FilterBar;
