import { Entity, UniqueEntityID, CartItem } from '@/domain/entities'

interface CartProps {
  total: number
  subTotal: number
  items: CartItem[]
  createdAt: Date
  updatedAt?: Date | null
}

export class Cart extends Entity<CartProps> {
  static create(props: CartProps, id?: UniqueEntityID): Cart {
    return new Cart(props, id)
  }
}
