import { Metadata } from "next";
import { IArticle } from "@/interfaces";
import { globalConfig as cfg } from "@/config";

const defaultImage = {
  url: `${cfg.gen.domain}/${cfg.gen.defaultImagePath}`, // _next/static/media/defaultImage.d4887a00.jpg
  width: 1200,
  height: 675,
  alt: cfg.gen.blogTitle,
};

export const home = {
  title: cfg.home.meta.title,
  description: cfg.home.meta.description,
  openGraph: {
    title: cfg.home.meta.title,
    description: cfg.home.meta.description,
    url: cfg.gen.domain,
    siteName: cfg.gen.siteName,
    images: [defaultImage],
    type: "website",
  },
};

const articles = {
  title: cfg.articles.meta.title,
  description: cfg.articles.meta.description,
  openGraph: {
    title: cfg.articles.meta.title,
    description: cfg.articles.meta.description,
    url: `${cfg.gen.domain}${cfg.articles.pathname}`,
    siteName: cfg.gen.siteName,
    images: [defaultImage],
    type: "article",
  },
};

const metadataHandler = (path: string, article?: IArticle): Metadata => {
  return path === cfg.home.pathname
    ? home
    : path === cfg.articles.pathname
    ? articles
    : path === cfg.details.pathname && article
    ? {
        title: article.title,
        description: article.description,
        openGraph: {
          title: article.title,
          description: article.description,
          url: `${cfg.gen.domain}${cfg.articles.pathname}/${article.id}`,
          siteName: cfg.gen.siteName,
          images: [
            {
              url: `https://${article.ipfs}.${cfg.gen.ipfs}`,
              width: 900,
              height: 450,
              alt: article.title,
            },
          ],
          type: "article",
        },
      }
    : home;
};

export default metadataHandler;
