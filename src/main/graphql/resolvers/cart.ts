import { CartItemResolverAdapter, CartResolverAdapter } from '@/main/adapters/graphql/resolvers'

export const cartResolver = {
  Query: {
    cart: (_: any, { id }: any) => CartResolverAdapter.cart(id),
    carts: CartResolverAdapter.carts
  },

  Mutation: {
    createCart: CartResolverAdapter.createCart,
    recalculateCart: (_: any, { id }: any) => CartResolverAdapter.recalculateCart(id)
  },

  Cart: {
    cartItems: ({ id }: any) => CartItemResolverAdapter.byCartId(id)
  }
}
