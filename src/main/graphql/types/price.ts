export const priceTypeDefs = `#graphql
type Price {
  id: UUID!
  ticketId: UUID!
  amount: Int!
  discount: Int!
  createdAt: DateTime!
}
`
