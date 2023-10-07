import { Metadata } from "next";
import { IArticle } from "@/interfaces";
import { SITE_DOMAIN, WEB3_STORAGE } from "@/constants";

const domain = SITE_DOMAIN;
const ipfs = WEB3_STORAGE;

const defaultImage = {
  url: `${domain}/_next/static/media/defaultImage.d4887a00.jpg`,
  width: 1200,
  height: 675,
  alt: "Всесвіт",
};

const defaultFields = {
  url: domain,
  siteName: "Healthy",
  images: [defaultImage],
  type: "website",
};

export const home = {
  title: "Healthy",
  description:
    "Вітаємо у світі Хелсі! Блог саморозвитку і пізнання себе, свого організму, здоров’я вашого та близьких вам людей. Ми допоможемо вам своєчасно помітити та розібратися, що саме може загрожувати членам вашої сім’ї. Завдяки нам зможете попередити багато захворювань, вчасно звернувшись до фахівців. Поговоримо про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Навчимо правилам догляду за хворими і багатьом навичкам середнього медичного персоналу.",
  openGraph: {
    title: "Healthy",
    description:
      "Вітаємо у світі Хелсі! Блог саморозвитку і пізнання себе, свого організму, здоров’я вашого та близьких вам людей. Ми допоможемо вам своєчасно помітити та розібратися, що саме може загрожувати членам вашої сім’ї. Завдяки нам зможете попередити багато захворювань, вчасно звернувшись до фахівців. Поговоримо про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Навчимо правилам догляду за хворими і багатьом навичкам середнього медичного персоналу.",
    ...defaultFields,
  },
};

const articles = {
  title: "Статті про організм людини та здоров'я",
  description:
    "Статті про організм людини, здоров'я та пізнання себе. Ми допоможемо вам розуміти можливі загрози для вашої родини та запобігти захворюванням, звернувшись до фахівців. Розкриваємо теми про першу допомогу при різних захворюваннях та основи догляду за хворими",
  openGraph: {
    title: "Статті про організм людини та здоров'я",
    description:
      "Статті про організм людини, здоров'я та пізнання себе. Ми допоможемо вам розуміти можливі загрози для вашої родини та запобігти захворюванням, звернувшись до фахівців. Розкриваємо теми про першу допомогу при різних захворюваннях та основи догляду за хворими.",
    ...defaultFields,
  },
};

const metadataHandler = (path: string, article?: IArticle): Metadata => {
  return path === "/"
    ? home
    : path === "/articles"
    ? articles
    : path === "/articles/id" && article
    ? {
        title: article.title,
        description: article.description,
        openGraph: {
          title: article.title,
          description: article.description,
          url: `${domain}/articles/${article.id}`,
          siteName: "Healthy",
          images: [
            {
              url: `https://${article.ipfs}.${ipfs}`,
              width: 900,
              height: 450,
              alt: article.title,
            },
          ],
          type: "website",
        },
      }
    : home;
};

export default metadataHandler;
