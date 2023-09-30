import { Entity, UniqueEntityID } from '@/domain/entities'

export interface CartProps {
  total: number
  subTotal: number
  createdAt: Date
  updatedAt?: Date | null
}

export class Cart extends Entity<CartProps> {
  static create(props: CartProps, id?: UniqueEntityID): Cart {
    return new Cart(props, id)
  }
}
