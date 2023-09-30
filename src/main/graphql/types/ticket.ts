export const ticketTypeDefs = `#graphql
extend type Query {
  ticket(id: UUID!): Ticket
  tickets: [Ticket!]
  paginatedTickets(pagination: PaginationInput): PaginatedTickets
}

type Ticket {
  id: UUID!
  name: String!
  description: String!
  imageUrl: String!
  amenities: [String!]
  createdAt: DateTime!
  updatedAt: DateTime
  
  price: Price
  address: Address
  reviews: [Review!]
  cartItems: [CartItem!]
}

type PaginatedTickets {
  pageInfo: PageInfo
  tickets: [Ticket!]
}

input PaginationInput {
  page: Int!
  perPage: Int!
}
`
