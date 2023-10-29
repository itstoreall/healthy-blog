import { useEffect, useState } from "react";
import { IArticle } from "@/interfaces";
import { globalConfig as cfg } from "@/config";
import s from "./TopArticles.module.scss";
import Label from "../Label";
import Cards from "../Cards";

const TopArticles = ({ articles }: { articles: IArticle[] }) => {
  const [topArticles, setTopArticles] = useState<IArticle[] | null>(null);

  useEffect(() => {
    const popular = articles
      .filter((element) => element !== null)
      .sort((a, b) => Number(b.views) - Number(a.views))
      .slice(0, 6);

    if (popular?.length) {
      setTopArticles(popular);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.topArticles}>
      {topArticles && (
        <>
          <Label text={cfg.topArticles.label} />

          <div className={s.cards}>
            <Cards articles={topArticles} />
          </div>
        </>
      )}
    </div>
  );
};

export default TopArticles;
