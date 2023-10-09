import { Cart } from '@/domain/entities'

export abstract class CartRepository {
  abstract findById(id: string): Promise<Cart | null>
  abstract findMany(): Promise<Cart[]>
  abstract create(cart: Cart): Promise<void>
  abstract update(cart: Cart): Promise<void>
}
