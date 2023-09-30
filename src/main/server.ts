import { apolloServer } from '@/main/graphql/apollo/apollo-server'

apolloServer()
  .then(({ url }) => console.log(`🚀  Server ready at: ${url}`))
  .catch(error => console.error('server error', error))
