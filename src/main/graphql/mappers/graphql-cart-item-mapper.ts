import { CartItem } from '@/domain/entities'

export class GraphqlCartItemMapper {
  static toGraphql(cartItem: CartItem): any {
    const { ticketId, cartId } = cartItem.toValue()
    return { ...cartItem.toValue(), cartId: cartId.toString(), ticketId: ticketId.toString() }
  }
}
