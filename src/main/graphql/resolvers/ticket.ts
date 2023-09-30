import {
  AddressResolverAdapter,
  CartItemResolverAdapter,
  PriceResolverAdapter,
  ReviewResolverAdapter,
  TicketResolverAdapter
} from '@/main/adapters/graphql/resolvers'

export const ticketResolver = {
  Query: {
    ticket: (_: any, { id }: any) => TicketResolverAdapter.ticket(id),
    paginatedTickets: TicketResolverAdapter.paginatedTickets
  },

  Ticket: {
    price: ({ id }: any) => PriceResolverAdapter.byTicketId(id),
    address: ({ id }: any) => AddressResolverAdapter.byTicketId(id),
    reviews: ({ id }: any) => ReviewResolverAdapter.byTicketId(id),
    cartItems: ({ id }: any) => CartItemResolverAdapter.byTicketId(id)
  }
}
