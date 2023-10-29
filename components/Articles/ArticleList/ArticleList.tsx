"use client";
import { IArticle } from "@/interfaces";
import s from "./ArticleList.module.scss";
import Cards from "@/components/Cards";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  return (
    <div className={`${s.articleList}`}>
      <Cards articles={articles} />
    </div>
  );
};

export default ArticleList;
