import { IFilterBarProps } from "./types";
import { middleGreyHover } from "../../theme";
import s from "./FilterBar.module.scss";
import Eye from "./Eye";
import CalendarIcon from "./CalendarIcon";
import ArrowIcon from "./ArrowIcon";

const FilterBar = ({ initArts, arts, setArts }: IFilterBarProps) => {
  const sortArticles = (label: string) => {
    if (!arts) return;

    const raw = initArts;
    const reverseOrder = arts.order === "up" ? "down" : "up";

    if (label === "date") {
      const revesed = raw.reverse();
      setArts({ label, order: reverseOrder, articles: revesed });
    }

    if (label === "views") {
      const sortedByViews = (order: string) =>
        raw
          .slice()
          .sort((a, b) =>
            order === "up"
              ? Number(a.views) - Number(b.views)
              : Number(b.views) - Number(a.views)
          );

      setArts({
        label,
        order: reverseOrder,
        articles: sortedByViews(arts.order),
      });
    }
  };

  console.log("arts", arts);

  return (
    <div className={s.filterBar}>
      <button className={s.filterButton} onClick={() => sortArticles("views")}>
        <Eye fill={middleGreyHover} size={"m"} />
        <ArrowIcon
          fill={middleGreyHover}
          direction={arts.label === "views" ? arts.order : "down"}
          size={"m"}
        />
      </button>
      <button className={s.filterButton} onClick={() => sortArticles("date")}>
        <CalendarIcon fill={middleGreyHover} size={"m"} />
        <ArrowIcon
          fill={middleGreyHover}
          direction={arts.label === "date" ? arts.order : "down"}
          size={"m"}
        />
      </button>
    </div>
  );
};

export default FilterBar;
