import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const { getClient: getServerClient } = registerApolloClient(() => {
  const apolloClientUrl = process.env.APOLLO_CLIENT_URL;

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: apolloClientUrl,
    }),
  });
});

export default getServerClient;

// export const { getClient } = registerApolloClient(() => {
//   const apolloClientUrl = process.env.APOLLO_CLIENT_URL;

//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link: new HttpLink({
//       uri: apolloClientUrl,
//     }),
//   });
// });
