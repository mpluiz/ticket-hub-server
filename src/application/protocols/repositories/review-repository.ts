import { Review } from '@/domain/entities'

export abstract class ReviewRepository {
  abstract findManyByTicketId(ticketId: string): Promise<Review[]>
}
