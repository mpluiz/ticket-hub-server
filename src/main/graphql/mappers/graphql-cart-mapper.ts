import { Cart } from '@/domain/entities'

export class GraphqlCartMapper {
  static toGraphql(cart: Cart): any {
    return cart.toValue()
  }
}
