import { Address as PrismaAddress } from '@prisma/client'
import { Address, UniqueEntityID } from '@/domain/entities'

export class PrismaAddressMapper {
  static toDomain(raw: PrismaAddress): Address {
    return Address.create({
      ticketId: new UniqueEntityID(raw.id),
      city: raw.city,
      state: raw.state,
      country: raw.country,
      createdAt: raw.createdAt
    }, new UniqueEntityID(raw.id))
  }
}
