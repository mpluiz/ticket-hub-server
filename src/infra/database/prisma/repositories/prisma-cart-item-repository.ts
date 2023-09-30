import { PrismaClient } from '@prisma/client'
import { CartItemRepository } from '@/application/protocols'
import { CartItem } from '@/domain/entities'
import { PrismaCartItemMapper } from '@/infra/database/prisma/mappers/prisma-cart-item-mapper'

export class PrismaCartItemRepository implements CartItemRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<CartItem | null> {
    const cartItem = await this.prisma.cartItem.findUnique({ where: { id } })

    if (!cartItem) {
      return null
    }

    return PrismaCartItemMapper.toDomain(cartItem)
  }

  async findManyByCartId(cartId: string): Promise<CartItem[]> {
    const cartItems = await this.prisma.cartItem.findMany({ where: { cartId } })

    return cartItems.map(PrismaCartItemMapper.toDomain)
  }

  async findManyByTicketId(ticketId: string): Promise<CartItem[]> {
    const cartItems = await this.prisma.cartItem.findMany({ where: { ticketId } })

    return cartItems.map(PrismaCartItemMapper.toDomain)
  }

  async findMany(): Promise<CartItem[]> {
    const cartItems = await this.prisma.cartItem.findMany()
    return cartItems.map(PrismaCartItemMapper.toDomain)
  }

  async create(cartItem: CartItem): Promise<void> {
    const data = PrismaCartItemMapper.toPrisma(cartItem)
    await this.prisma.cartItem.create({ data })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.cartItem.delete({ where: { id } })
  }
}
