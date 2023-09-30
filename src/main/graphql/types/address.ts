export const addressTypeDefs = `#graphql
type Address {
  id: UUID!
  ticketId: UUID!
  city: String!
  state: String!
  country: String!
  createdAt: DateTime!
}
`
