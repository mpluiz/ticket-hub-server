import { CartItemResolverAdapter, CartResolverAdapter } from '@/main/adapters/graphql/resolvers'

export const cartResolver = {
  Query: {
    cart: (_: any, { id }: any) => CartResolverAdapter.cart(id),
    carts: CartResolverAdapter.carts
  },

  Cart: {
    cartItems: ({ id }: any) => CartItemResolverAdapter.byCartId(id)
  }
}
