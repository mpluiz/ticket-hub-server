export const reviewTypeDefs = `#graphql
type Review {
  id: UUID!
  ticketId: UUID!
  value: Float!
  createdAt: DateTime!
}
`
