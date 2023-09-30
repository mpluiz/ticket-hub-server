import { Cart as PrismaCart, Prisma } from '@prisma/client'
import { Cart, UniqueEntityID } from '@/domain/entities'

export class PrismaCartMapper {
  static toDomain(raw: PrismaCart): Cart {
    return Cart.create(
      {
        total: Number(raw.total),
        subTotal: Number(raw.subTotal),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt
      },
      new UniqueEntityID(raw.id)
    )
  }

  static toPrisma(cart: Cart): Prisma.CartUncheckedCreateInput {
    const { total, subTotal, createdAt, updatedAt } = cart.toValue()
    return {
      id: cart.id.toString(),
      total,
      subTotal,
      createdAt,
      updatedAt
    }
  }
}
