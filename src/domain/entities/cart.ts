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

  get subTotal(): number {
    return this.props.subTotal
  }

  set subTotal(value: number) {
    this.props.subTotal = value
  }

  get total(): number {
    return this.props.total
  }

  set total(value: number) {
    this.props.total = value
  }
}
