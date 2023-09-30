import { Address } from '@/domain/entities'

export class GraphqlAddressMapper {
  static toGraphql(address: Address): any {
    const { ticketId } = address.toValue()
    return { ...address.toValue(), ticketId: ticketId.toString() }
  }
}
