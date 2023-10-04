import { Price as PrismaPrice } from '@prisma/client'
import { Price, UniqueEntityID } from '@/domain/entities'

export class PrismaPriceMapper {
  static toDomain(raw: PrismaPrice): Price {
    return Price.create({
      ticketId: new UniqueEntityID(raw.id),
      originalValue: Number(raw.originalValue),
      value: Number(raw.value),
      discount: Number(raw.discount),
      createdAt: raw.createdAt
    }, new UniqueEntityID(raw.id))
  }
}
