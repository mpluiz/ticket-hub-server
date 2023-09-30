import { CartItemRepository } from '@/application/protocols'
import { CartItem } from '@/domain/entities'

export class InMemoryCartItemRepository implements CartItemRepository {
  public cartItems: CartItem[] = []

  async create(cartItem: CartItem): Promise<void> {
    this.cartItems.push(cartItem)
  }

  async findById(id: string): Promise<CartItem | null> {
    const index = this.cartItems.findIndex(cartItem => cartItem.id.toString() === id)
    return this.cartItems[index]
  }

  async findMany(): Promise<CartItem[]> {
    return this.cartItems
  }

  async findManyByCartId(cartId: string): Promise<CartItem[]> {
    this.cartItems.findIndex(cartItem => cartItem.cartId.toString() === cartId)
    return this.cartItems
  }

  async findManyByTicketId(ticketId: string): Promise<CartItem[]> {
    this.cartItems.findIndex(cartItem => cartItem.ticketId.toString() === ticketId)
    return this.cartItems
  }

  async delete(id: string): Promise<void> {
    const index = this.cartItems.findIndex(cartItem => cartItem.id.toString() === id)
    this.cartItems.splice(index, 1)
  }
}
