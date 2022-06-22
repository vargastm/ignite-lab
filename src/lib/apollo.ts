import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pxfa522u1x01w7guno0htj/master',
  cache: new InMemoryCache()
})