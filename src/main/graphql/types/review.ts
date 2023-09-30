export const reviewTypeDefs = `#graphql
type Review {
  id: UUID!
  ticketId: UUID!
  value: Int!
  createdAt: DateTime!
}
`
