import PrismaClient from '@/infra/database/prisma/client'
import { PrismaCartItemRepository } from '@/infra/database/prisma/repositories'
import { GraphqlCartItemMapper } from '@/main/graphql/mappers'
import { makeCreateCartItemUseCase, makeDeleteCartItem } from '@/main/factories/usecases'

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

  static async createCartItem(cartItem: any) {
    const usecase = makeCreateCartItemUseCase()
    const response = await usecase.execute(cartItem)

    if (!response.value) {
      return null
    }

    return GraphqlCartItemMapper.toGraphql(response.value.cartItem)
  }

  static async deleteCartItem(id: string) {
    const usecase = makeDeleteCartItem()
    const response = await usecase.execute({ id })

    return response.value
  }
}
