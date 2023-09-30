export const rootTypeDefs = `#graphql
scalar UUID
scalar DateTime

type Query {
  _empty: Boolean!
}

type Mutation {
  _empty: Boolean!
}

type PageInfo {
  page: Int!
  perPage: Int!
  totalItems: Int!
  totalPages: Int!
}
`
