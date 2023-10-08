import { Metadata } from "next";
import { IArticle } from "@/interfaces";
// import { SITE_DOMAIN, WEB3_STORAGE } from "@/constants";
import { globalConfig as cfg } from "@/config";

// const domain = SITE_DOMAIN;
// const ipfs = WEB3_STORAGE;

const defaultImage = {
  url: `${cfg.gen.domain}/_next/static/media/defaultImage.d4887a00.jpg`,
  width: 1200,
  height: 675,
  alt: cfg.gen.blogTitle,
};

export const home = {
  title: cfg.gen.blogTitle,
  description: cfg.home.meta.description,
  // description:
  //   "Вітаємо у світі Хелсі! Блог саморозвитку і пізнання себе, свого організму, здоров’я вашого та близьких вам людей. Ми допоможемо вам своєчасно помітити та розібратися, що саме може загрожувати членам вашої сім’ї. Завдяки нам зможете попередити багато захворювань, вчасно звернувшись до фахівців. Поговоримо про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Навчимо правилам догляду за хворими і багатьом навичкам середнього медичного персоналу.",
  openGraph: {
    title: cfg.gen.blogTitle,
    description: cfg.home.meta.description,
    // description:
    //   "Вітаємо у світі Хелсі! Блог саморозвитку і пізнання себе, свого організму, здоров’я вашого та близьких вам людей. Ми допоможемо вам своєчасно помітити та розібратися, що саме може загрожувати членам вашої сім’ї. Завдяки нам зможете попередити багато захворювань, вчасно звернувшись до фахівців. Поговоримо про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Навчимо правилам догляду за хворими і багатьом навичкам середнього медичного персоналу.",
    url: cfg.gen.domain,
    siteName: cfg.gen.blogTitle,
    images: [defaultImage],
    type: "website",
  },
};

const articles = {
  title: cfg.articles.meta.title,
  description: cfg.articles.meta.description,
  // title: "Статті про організм людини та здоров'я",
  // description:
  //   "Статті про організм людини, здоров'я та пізнання себе. Ми допоможемо вам розуміти можливі загрози для вашої родини та запобігти захворюванням, звернувшись до фахівців. Розкриваємо теми про першу допомогу при різних захворюваннях та основи догляду за хворими",
  openGraph: {
    title: cfg.articles.meta.title,
    description: cfg.articles.meta.description,
    // description:
    //   "Статті про організм людини, здоров'я та пізнання себе. Ми допоможемо вам розуміти можливі загрози для вашої родини та запобігти захворюванням, звернувшись до фахівців. Розкриваємо теми про першу допомогу при різних захворюваннях та основи догляду за хворими.",
    url: cfg.gen.domain,
    siteName: cfg.gen.blogTitle,
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
          siteName: cfg.gen.blogTitle,
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
