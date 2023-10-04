export const priceTypeDefs = `#graphql
type Price {
  id: UUID!
  ticketId: UUID!
  originalValue: Float!
  value: Float!
  discount: Float!
  createdAt: DateTime!
}
`
