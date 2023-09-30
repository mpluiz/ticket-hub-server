import { Cart, CartProps, UniqueEntityID } from '@/domain/entities'

export function makeCart(override: Partial<CartProps> = {}, id?: UniqueEntityID): Cart {
  const cart = Cart.create({
    total: 0,
    subTotal: 0,
    createdAt: new Date(),
    ...override
  }, id)

  return cart
}
