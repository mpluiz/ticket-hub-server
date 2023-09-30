export const cartItemTypeDefs = `#graphql
type CartItem {
  id: UUID!
  cartId: UUID!
  ticketId: UUID!
  quantity: Int!
  createdAt: DateTime!
  
  cart: Cart
  ticket: Ticket
}
`
