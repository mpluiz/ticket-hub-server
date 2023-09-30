import {
  addressTypeDefs,
  cartItemTypeDefs,
  cartTypeDefs,
  priceTypeDefs,
  reviewTypeDefs,
  rootTypeDefs, ticketTypeDefs
} from '@/main/graphql/types'
import {
  cartItemResolver,
  cartResolver,
  rootResolvers,
  ticketResolver
} from '@/main/graphql/resolvers'

export const typeDefs = [
  rootTypeDefs,
  addressTypeDefs,
  cartTypeDefs,
  cartItemTypeDefs,
  priceTypeDefs,
  reviewTypeDefs,
  ticketTypeDefs
]

export const resolvers = [rootResolvers, ticketResolver, cartResolver, cartItemResolver]
