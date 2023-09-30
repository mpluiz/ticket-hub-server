import PrismaClient from '@/infra/database/prisma/client'
import { PrismaPriceRepository } from '@/infra/database/prisma/repositories'
import { GraphqlPriceMapper } from '@/main/graphql/mappers'

export class PriceResolverAdapter {
  static async price(id: string) {
    const repository = new PrismaPriceRepository(PrismaClient)
    const price = await repository.findById(id)

    if (!price) {
      return null
    }

    return GraphqlPriceMapper.toGraphql(price)
  }

  static async byTicketId(ticketId: string) {
    const repository = new PrismaPriceRepository(PrismaClient)
    const price = await repository.findByTicketId(ticketId)

    if (!price) {
      return null
    }

    return GraphqlPriceMapper.toGraphql(price)
  }
}
