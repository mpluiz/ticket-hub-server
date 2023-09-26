import { Entity, UniqueEntityID, Ticket } from '@/domain/entities'

interface CartProps {
  items: Ticket[]
  subTotal: number
  total: number
}

export class Cart extends Entity<CartProps> {
  static create(props: CartProps, id?: UniqueEntityID): Cart {
    return new Cart(props, id)
  }
}
