import { PrismaClient } from '@prisma/client'
import { PriceRepository } from '@/application/protocols'
import { Price } from '@/domain/entities'
import { PrismaPriceMapper } from '@/infra/database/prisma/mappers'

export class PrismaPriceRepository implements PriceRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<Price | null> {
    const price = await this.prisma.price.findUnique({ where: { id } })

    if (!price) {
      return null
    }

    return PrismaPriceMapper.toDomain(price)
  }

  async findByTicketId(ticketId: string): Promise<Price | null> {
    const price = await this.prisma.price.findUnique({ where: { ticketId } })

    if (!price) {
      return null
    }

    return PrismaPriceMapper.toDomain(price)
  }

  async findMany(): Promise<Price[]> {
    const price = await this.prisma.price.findMany()
    return price.map(PrismaPriceMapper.toDomain)
  }
}
