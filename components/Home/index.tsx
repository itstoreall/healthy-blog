"use client";
import { useTheme } from "next-themes";
import { IArticle } from "@/interfaces";
import { getCurrentTheme } from "@/utils";
import { globalConfig as cfg } from "@/config";
import s from "./index.module.scss";
import InnerContainer from "../Containers/InnerContainer";
import LatestArticle from "../LatestArticle";
import PageMeta from "../Meta/PageMeta";
import TopArticles from "../TopArticles";

const HomeContent = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  return (
    <InnerContainer>
      <div className={s.home}>
        <article className={`${s.homeContent} ${s[currentTheme]}`}>
          <PageMeta
            title={cfg.home.content.title}
            description={cfg.home.meta.description}
            location={"home"}
          />

          {articles && (
            <>
              <LatestArticle articles={articles} />
              <TopArticles articles={articles} />
            </>
          )}
        </article>
      </div>
    </InnerContainer>
  );
};

export default HomeContent;
