import PrismaClient from '@/infra/database/prisma/client'
import { PrismaReviewRepository } from '@/infra/database/prisma/repositories'
import { GraphqlReviewMapper } from '@/main/graphql/mappers'

export class ReviewResolverAdapter {
  static async byTicketId(ticketId: string) {
    const repository = new PrismaReviewRepository(PrismaClient)
    const reviews = await repository.findManyByTicketId(ticketId)

    return reviews.map(GraphqlReviewMapper.toGraphql)
  }
}
