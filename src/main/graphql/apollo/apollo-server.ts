import { ApolloServer } from '@apollo/server'
import { resolvers, typeDefs } from '@/main/graphql/schema'
import { startStandaloneServer } from '@apollo/server/standalone'
import { env } from '@/main/config/env'

export async function apolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers })

  return startStandaloneServer(server, {
    listen: { port: env.GRAPHQL_PORT }
  })
}
