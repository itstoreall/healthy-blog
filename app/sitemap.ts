import GET_ARTICLES from "@/gql/getArticles";
import { BLOG_NAME } from "@/constants";
import functionClient from "@/lib/functionClient";
import { IArticle } from "@/interfaces";

const baseUrl = "https://healthy.storeall.com.ua";
const blog = BLOG_NAME;
const artsRoute = "articles";

const convertDate = (inputDate: string) => {
  const date = new Date(inputDate);
  date.setUTCHours(14);
  date.setUTCMinutes(18);
  date.setUTCSeconds(6);
  date.setUTCMilliseconds(754);
  return date.toISOString();
};

const sitemap = async () => {
  const { data }: { data: { articles: IArticle[] } } =
    await functionClient().query({
      query: GET_ARTICLES,
      variables: { blog },
    });

  const locs = data.articles.map(({ id, timestamp }) => ({
    url: `${baseUrl}/${artsRoute}/${id}`,
    lastModified: convertDate(timestamp),
  }));

  const routes = ["/", `/${artsRoute}`].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...locs];
};

export default sitemap;
