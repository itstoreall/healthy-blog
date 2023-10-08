import { BLOG_TITLE, SITE_DOMAIN, WEB3_STORAGE } from "@/constants";

const domain = SITE_DOMAIN;
const blogTitle = BLOG_TITLE;
const ipfs = WEB3_STORAGE;

// const defaultImage = {
//   url: `${domain}/_next/static/media/defaultImage.d4887a00.jpg`,
//   width: 1200,
//   height: 675,
//   alt: blogTitle,
// };

// const metaDefaultFields = {
//   url: domain,
//   siteName: blogTitle,
//   images: [defaultImage],
//   type: "website",
// };

export const globalConfig = {
  gen: {
    domain,
    blogTitle,
    ipfs,
  },
  home: {
    pathname: "/",
    meta: {
      title: blogTitle,
      description:
        "Вітаємо у світі Хелсі! Блог саморозвитку і пізнання себе, свого організму, здоров’я вашого та близьких вам людей. Ми допоможемо вам своєчасно помітити та розібратися, що саме може загрожувати членам вашої сім’ї. Завдяки нам зможете попередити багато захворювань, вчасно звернувшись до фахівців. Поговоримо про першу домедичну допомогу при різних захворюваннях, особливо коли симптоми з’являються вперше. Навчимо правилам догляду за хворими і багатьом навичкам середнього медичного персоналу.",
    },
    content: {},
  },
  articles: {
    pathname: "/articles",
    meta: {
      title: "Статті про організм людини та здоров'я",
      description:
        "Статті про організм людини, здоров'я та пізнання себе. Ми допоможемо вам розуміти можливі загрози для вашої родини та запобігти захворюванням, звернувшись до фахівців. Розкриваємо теми про першу допомогу при різних захворюваннях та основи догляду за хворими",
    },
    content: {},
  },
  details: {
    pathname: "/articles/id",
    meta: {},
    content: {},
  },
};
