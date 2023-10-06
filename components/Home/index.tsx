"use client";

import { useTheme } from "next-themes";
import { IArticle } from "@/interfaces";
import { getCurrentTheme } from "@/utils";
import { home } from "@/utils/metadataHandler";
import s from "./index.module.scss";
import InnerContainer from "../Containers/InnerContainer";
import LatestArticle from "../LatestArticle";
import PageMeta from "../Meta/PageMeta";
import TopThree from "../TopThree";

const HomeContent = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  return (
    <InnerContainer>
      <div className={s.home}>
        <article className={`${s.homeContent} ${s[currentTheme]}`}>
          <PageMeta
            title={"Блог медичного саморозвитку"}
            description={home.description}
          />

          {articles && (
            <>
              <LatestArticle articles={articles} />
              <TopThree articles={articles} />
            </>
          )}
        </article>
      </div>
    </InnerContainer>
  );
};

export default HomeContent;
