import { Entity, UniqueEntityID } from '@/domain/entities'

interface CartItemProps {
  cartId: UniqueEntityID
  ticketId: UniqueEntityID
  quantity: number
  createdAt: Date
}

export class CartItem extends Entity<CartItemProps> {
  static create(props: CartItemProps, id?: UniqueEntityID): CartItem {
    return new CartItem(props, id)
  }
}
