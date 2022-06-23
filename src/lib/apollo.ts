import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4pozajo25a301xs1ciuduj5/master",
    cache: new InMemoryCache()

})