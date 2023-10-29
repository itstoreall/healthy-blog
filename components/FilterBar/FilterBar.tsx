import { IFilterBarProps } from "./types";
import { globalConfig as cfg } from "@/config";
import { middleGreyHover } from "../../theme";
import s from "./FilterBar.module.scss";
import ArrowIcon from "./ArrowIcon";
import { useEffect } from "react";

const FilterBar = ({ arts, setArts }: IFilterBarProps) => {
  useEffect(() => {
    const lsFilterBar = localStorage.getItem(cfg.gen.lsFilterKey);
    if (lsFilterBar) {
      const lsArtsConfig = JSON.parse(lsFilterBar);
      setArts({ ...arts, ...lsArtsConfig });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(
      cfg.gen.lsFilterKey,
      JSON.stringify({ label: arts.label, order: arts.order })
    );
  }, [arts]);

  const sortArticles = (label: string) => {
    if (!arts) return;

    const raw = arts.articles;

    let sorted = { label: "", order: "", articles: raw };

    if (label === "date") {
      const revesed = raw.reverse();
      const direction = arts.order === "up" ? "down" : "up";
      sorted = { label, order: direction, articles: revesed };
    }

    setArts(sorted);
  };

  console.log("arts", arts);

  return (
    <div className={s.filterBar}>
      <button className={s.filterButton} onClick={() => sortArticles("date")}>
        <span>сортувати</span>
        <ArrowIcon fill={middleGreyHover} direction={arts.order} size={"m"} />
      </button>
    </div>
  );
};

export default FilterBar;
