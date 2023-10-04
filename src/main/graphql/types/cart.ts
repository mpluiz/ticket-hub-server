export const cartTypeDefs = `#graphql
extend type Query {
  cart(id: UUID!): Cart
  carts: [Cart!]
}

type Cart {
  id: UUID!
  total: Float!
  subTotal: Float!
  createdAt: DateTime!
  updatedAt: DateTime
  
  cartItems: [CartItem!]
}
`
