import { PrismaClient } from '@prisma/client'
import { CartRepository } from '@/application/protocols'
import { Cart } from '@/domain/entities'
import { PrismaCartMapper } from '@/infra/database/prisma/mappers/prisma-cart-mapper'

export class PrismaCartRepository implements CartRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<Cart | null> {
    const cart = await this.prisma.cart.findUnique({ where: { id } })

    if (!cart) {
      return null
    }

    return PrismaCartMapper.toDomain(cart)
  }

  async findMany(): Promise<Cart[]> {
    const carts = await this.prisma.cart.findMany({ include: { cartItems: true } })

    return carts.map(PrismaCartMapper.toDomain)
  }

  async create(cart: Cart): Promise<void> {
    const data = PrismaCartMapper.toPrisma(cart)
    await this.prisma.cart.create({ data })
  }

  async update(cart: Cart): Promise<void> {
    const data = PrismaCartMapper.toPrisma(cart)
    await this.prisma.cart.update({ where: { id: data.id }, data })
  }
}
