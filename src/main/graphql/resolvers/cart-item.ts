import { CartItemResolverAdapter, CartResolverAdapter, TicketResolverAdapter } from '@/main/adapters/graphql/resolvers'

export const cartItemResolver = {
  Mutation: {
    createCartItem: (_: any, { data }: any) => CartItemResolverAdapter.createCartItem(data),
    deleteCartItem: (_: any, { id }: any) => CartItemResolverAdapter.deleteCartItem(id)
  },

  CartItem: {
    cart: ({ cartId }: any) => CartResolverAdapter.cart(cartId),
    ticket: ({ ticketId }: any) => TicketResolverAdapter.ticket(ticketId)
  }
}
