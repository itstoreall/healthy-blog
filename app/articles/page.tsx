import { Metadata } from "next";
import services from "@/services";
import { globalConfig as cfg } from "@/config";
import s from "../page.module.scss";
import Articles from "@/components/Articles";
import metadataHandler from "@/utils/metadataHandler";

export const metadata: Metadata = metadataHandler(cfg.articles.pathname);

const ArticlesPage = async () => {
  const articles = await services.getServerArticles();

  if (!articles?.length) return <p>no articles</p>;

  return (
    <div className={s.content}>
      <Articles articles={articles} />
    </div>
  );
};

export default ArticlesPage;

/*

export const dynamic = "force-dynamic";
export const revalidate = 10;

*/
