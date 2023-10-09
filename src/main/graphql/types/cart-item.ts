export const cartItemTypeDefs = `#graphql
extend type Mutation {
  createCartItem(data: CreateCartItemInput!): CartItem
  deleteCartItem(id: UUID!): Boolean!
}

type CartItem {
  id: UUID!
  cartId: UUID!
  ticketId: UUID!
  subTotal: Float!
  quantity: Int!
  createdAt: DateTime!
  
  cart: Cart
  ticket: Ticket
}

input CreateCartItemInput {
  cartId: UUID!
  ticketId: UUID!
  subTotal: Float!
  quantity: Int!
}
`
