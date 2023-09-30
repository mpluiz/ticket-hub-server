export const cartItemTypeDefs = `#graphql
type CartItem {
  id: UUID!
  cartId: UUID!
  ticketId: UUID!
  quantity: Int!
  createdAt: String!
  
  cart: Cart
  ticket: Ticket
}
`
