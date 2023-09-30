import { Price } from '@/domain/entities'

export class GraphqlPriceMapper {
  static toGraphql(price: Price): any {
    const { ticketId } = price.toValue()
    return { ...price.toValue(), ticketId: ticketId.toString() }
  }
}
