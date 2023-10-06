export const ticketTypeDefs = `#graphql
extend type Query {
  ticket(id: UUID!): Ticket
  tickets: [Ticket!]
  paginatedTickets(searchOptions: SearchOptionsInput): PaginatedTickets
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

input SearchOptionsInput {
  term: String
  pagination: PaginationInput
}

input PaginationInput {
  page: Int!
  perPage: Int!
}
`
