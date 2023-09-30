import { GraphQLDateTime, GraphQLUUID } from 'graphql-scalars'

export const rootResolvers = {
  UUID: GraphQLUUID,
  DateTime: GraphQLDateTime,

  Query: {
    _empty: () => true
  },

  Mutation: {
    _empty: () => true
  }
}
