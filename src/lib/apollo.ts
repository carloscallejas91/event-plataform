import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ogkfmx00ik01xx81peb6yt/master",
  cache: new InMemoryCache(),
});
