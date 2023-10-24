import * as constants from "@/constants";

const ipfsLink = process.env.ipfsLink;

const defaultTheme = constants.THEME_BY_DEFAULT;
const domain = constants.SITE_DOMAIN;
const blogName = constants.BLOG_NAME;
const blogTitle = constants.BLOG_TITLE;
const defaultImagePath = `_next/static/media/defaultImage.${constants.DEFAULT_IMAGE_ID}.jpg`;
const ipfs = `${ipfsLink}/${blogName}-image.jpg`;
const lsViewsKey = constants.LS_VIEWS_KEY;
const months = constants.MONTHS;

export const globalConfig = {
  gen: {
    defaultTheme,
    domain,
    blogTitle,
    defaultImagePath,
    ipfs,
    lsViewsKey,
    months,
  },
  home: {
    pathname: "/",
    meta: {
      title: `Хелсі`,
      description:
        "Вітаємо! Блог Хелсі містить статті про симптоми захворювань, пізнання організму та здоров’я людини. Блог Хелсі - це допомога своєчасно помітити та розібратися, що саме може загрожувати вам та членам сім’ї. Статті медичного саморозвитку допомогають попередити багато захворювань та вчасно звернутись до фахівців. В блозі ви знайдете поради про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Також в Хелсі дізнаєтесь правила догляду за хворими і навички середнього медичного персоналу.",
    },
    content: {
      title: "Блог медичного саморозвитку Хелсі",
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
  tagTitle: {
    key: "title",
    h2: { pageTitle: "page_title" },
    h3: {
      cardSmall: "card_small",
      cardMedium: "card_medium",
      artSubtitle: "art_subtitle",
    },
  },
  tagParagraph: {
    key: "paragraph",
    p: { artParagraph: "art_paragraph", artDescription: "art_description" },
  },
};
