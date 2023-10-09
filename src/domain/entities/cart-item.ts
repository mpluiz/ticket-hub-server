import { Entity, UniqueEntityID } from '@/domain/entities'

export interface CartItemProps {
  cartId: UniqueEntityID
  ticketId: UniqueEntityID
  subTotal: number
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

  get subTotal(): number {
    return this.props.subTotal
  }

  get quantity(): number {
    return this.props.quantity
  }

  set quantity(value: number) {
    this.props.quantity = value
  }
}
