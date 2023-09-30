import { CartResolverAdapter, TicketResolverAdapter } from '@/main/adapters/graphql/resolvers'

export const cartItemResolver = {
  CartItem: {
    cart: ({ cartId }: any) => CartResolverAdapter.cart(cartId),
    ticket: ({ ticketId }: any) => TicketResolverAdapter.ticket(ticketId)
  }
}
