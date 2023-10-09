import { CartItem as PrismaCartItem, Prisma } from '@prisma/client'
import { CartItem, UniqueEntityID } from '@/domain/entities'

export class PrismaCartItemMapper {
  static toDomain(raw: PrismaCartItem): CartItem {
    return CartItem.create(
      {
        cartId: new UniqueEntityID(raw.cartId),
        ticketId: new UniqueEntityID(raw.ticketId),
        subTotal: Number(raw.subTotal),
        quantity: raw.quantity,
        createdAt: raw.createdAt
      },
      new UniqueEntityID(raw.id)
    )
  }

  static toPrisma(cartItem: CartItem): Prisma.CartItemUncheckedCreateInput {
    const { cartId, ticketId, subTotal, quantity, createdAt } = cartItem.toValue()
    return {
      id: cartItem.id.toString(),
      cartId: cartId.toString(),
      ticketId: ticketId.toString(),
      subTotal,
      quantity,
      createdAt
    }
  }
}
