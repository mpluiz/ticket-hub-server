import { PrismaClient } from '@prisma/client'
import { ReviewRepository } from '@/application/protocols'
import { Review } from '@/domain/entities'
import { PrismaReviewMapper } from '@/infra/database/prisma/mappers'

export class PrismaReviewRepository implements ReviewRepository {
  constructor(private prisma: PrismaClient) {}

  async findManyByTicketId(ticketId: string): Promise<Review[]> {
    const reviews = await this.prisma.review.findMany({ where: { ticketId } })

    return reviews.map(PrismaReviewMapper.toDomain)
  }
}
