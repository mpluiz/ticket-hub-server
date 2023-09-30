import { Review as PrismaReview } from '@prisma/client'
import { Review, UniqueEntityID } from '@/domain/entities'

export class PrismaReviewMapper {
  static toDomain(raw: PrismaReview): Review {
    return Review.create({
      ticketId: new UniqueEntityID(raw.id),
      value: Number(raw.value),
      createdAt: raw.createdAt
    }, new UniqueEntityID(raw.id))
  }
}
