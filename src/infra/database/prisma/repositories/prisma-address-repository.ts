import { PrismaClient } from '@prisma/client'
import { AddressRepository } from '@/application/protocols'
import { Address } from '@/domain/entities'
import { PrismaAddressMapper } from '@/infra/database/prisma/mappers'

export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<Address | null> {
    const address = await this.prisma.address.findUnique({ where: { id } })

    if (!address) {
      return null
    }

    return PrismaAddressMapper.toDomain(address)
  }

  async findByTicketId(ticketId: string): Promise<Address | null> {
    const address = await this.prisma.address.findUnique({ where: { ticketId } })

    if (!address) {
      return null
    }

    return PrismaAddressMapper.toDomain(address)
  }

  async findMany(): Promise<Address[]> {
    const address = await this.prisma.address.findMany()
    return address.map(PrismaAddressMapper.toDomain)
  }
}
