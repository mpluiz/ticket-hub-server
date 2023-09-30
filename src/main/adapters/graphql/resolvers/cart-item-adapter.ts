import PrismaClient from '@/infra/database/prisma/client'
import { PrismaCartItemRepository } from '@/infra/database/prisma/repositories'
import { GraphqlCartItemMapper } from '@/main/graphql/mappers'

export class CartItemResolverAdapter {
  static async byCartId(cartId: string) {
    const repository = new PrismaCartItemRepository(PrismaClient)
    const cartItems = await repository.findManyByCartId(cartId)

    return cartItems.map(GraphqlCartItemMapper.toGraphql)
  }

  static async byTicketId(ticketId: string) {
    const repository = new PrismaCartItemRepository(PrismaClient)
    const cartItems = await repository.findManyByTicketId(ticketId)

    return cartItems.map(GraphqlCartItemMapper.toGraphql)
  }
}
