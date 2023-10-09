import { CartRepository } from '@/application/protocols'
import { Cart } from '@/domain/entities'

export class InMemoryCartRepository implements CartRepository {
  public carts: Cart[] = []

  async create(cart: Cart): Promise<void> {
    this.carts.push(cart)
  }

  async findById(id: string): Promise<Cart | null> {
    const index = this.carts.findIndex(cart => cart.id.toString() === id)
    return this.carts[index]
  }

  async findMany(): Promise<Cart[]> {
    return this.carts
  }

  async update(cart: Cart): Promise<void> {
    const index = this.carts.findIndex(currentCart => currentCart.id.toString() === cart.id.toString())
    this.carts[index] = cart
  }
}
