import PrismaClient from '@/infra/database/prisma/client'
import { PrismaAddressRepository } from '@/infra/database/prisma/repositories'
import { GraphqlAddressMapper } from '@/main/graphql/mappers'

export class AddressResolverAdapter {
  static async address(id: string) {
    const repository = new PrismaAddressRepository(PrismaClient)
    const address = await repository.findById(id)

    if (!address) {
      return null
    }

    return GraphqlAddressMapper.toGraphql(address)
  }

  static async byTicketId(ticketId: string) {
    const repository = new PrismaAddressRepository(PrismaClient)
    const address = await repository.findByTicketId(ticketId)

    if (!address) {
      return null
    }

    return GraphqlAddressMapper.toGraphql(address)
  }
}
