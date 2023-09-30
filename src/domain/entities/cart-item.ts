import { Entity, UniqueEntityID } from '@/domain/entities'

export interface CartItemProps {
  cartId: UniqueEntityID
  ticketId: UniqueEntityID
  quantity: number
  createdAt: Date
}

export class CartItem extends Entity<CartItemProps> {
  static create(props: CartItemProps, id?: UniqueEntityID): CartItem {
    return new CartItem(props, id)
  }

  get cartId(): UniqueEntityID {
    return this.props.cartId
  }

  get ticketId(): UniqueEntityID {
    return this.props.ticketId
  }
}
