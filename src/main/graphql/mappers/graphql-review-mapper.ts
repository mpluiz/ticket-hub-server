import { Review } from '@/domain/entities'

export class GraphqlReviewMapper {
  static toGraphql(review: Review): any {
    const { ticketId } = review.toValue()
    return { ...review.toValue(), ticketId: ticketId.toString() }
  }
}
