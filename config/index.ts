import {
  BLOG_TITLE,
  LS_VIEWS_KEY,
  MONTHS,
  SITE_DOMAIN,
  THEME_BY_DEFAULT,
  WEB3_STORAGE,
} from "@/constants";

const defaultTheme = THEME_BY_DEFAULT;
const domain = SITE_DOMAIN;
const blogTitle = BLOG_TITLE;
const ipfs = WEB3_STORAGE;
const lsViewsKey = LS_VIEWS_KEY;
const months = MONTHS;

export const globalConfig = {
  gen: {
    defaultTheme,
    domain,
    blogTitle,
    ipfs,
    lsViewsKey,
    months,
  },
  home: {
    pathname: "/",
    meta: {
      title: blogTitle,
      description:
        "Вітаємо у світі Хелсі! Блог саморозвитку і пізнання себе, свого організму, здоров’я вашого та близьких вам людей. Ми допоможемо вам своєчасно помітити та розібратися, що саме може загрожувати членам вашої сім’ї. Завдяки нам зможете попередити багато захворювань, вчасно звернувшись до фахівців. Поговоримо про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Навчимо правилам догляду за хворими і багатьом навичкам середнього медичного персоналу.",
    },
    content: {
      title: "Блог медичного саморозвитку",
    },
  },
  articles: {
    pathname: "/articles",
    meta: {
      title: "Статті про організм людини та здоров'я",
      description:
        "Статті про організм людини, здоров'я та пізнання себе. Ми допоможемо вам розуміти можливі загрози для вашої родини та запобігти захворюванням, звернувшись до фахівців. Розкриваємо теми про першу допомогу при різних захворюваннях та основи догляду за хворими",
    },
    content: { articleList: { label: "Статті" } },
  },
  details: {
    pathname: "/articles/id",
    meta: {},
    content: {
      today: "Сьогодні",
      author: "Автор",
      publication: "Публікація",
      id: { key: "ID", defaultValue: "000" },
    },
  },
  latestArticle: {
    label: "Остання публікація",
  },
  topThree: {
    label: "Топ три",
  },
};
