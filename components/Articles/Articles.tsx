"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import { globalConfig as cfg } from "@/config";
import { IArticle } from "@/interfaces";
import { IArtsState } from "./types";
import s from "./Articles.module.scss";
import InnerContainer from "../Containers/InnerContainer";
import FilterBar from "../FilterBar";
import ArticleList from "./ArticleList";
import Label from "../Label";

const Articles = ({ articles }: { articles: IArticle[] }) => {
  const [arts, setArts] = useState<IArtsState | null>(null);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  useEffect(() => {
    const firstDate: Date = new Date(articles[0].timestamp);
    const lastDate: Date = new Date(articles[articles.length - 1].timestamp);
    const order = firstDate > lastDate ? "down" : "up";
    !arts && setArts({ label: "", order, articles });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  return (
    <InnerContainer>
      <div className={`${s.articlesWrap} ${s[currentTheme]}`}>
        <Label text={cfg.articles.content.articleList.label} />

        {arts && (
          <>
            <FilterBar initArts={articles} arts={arts} setArts={setArts} />
            <ArticleList articles={arts?.articles} />
          </>
        )}
      </div>
    </InnerContainer>
  );
};

export default Articles;
