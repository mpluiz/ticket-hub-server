import { CartItem } from '@/domain/entities'

export abstract class CartItemRepository {
  abstract findById(id: string): Promise<CartItem | null>
  abstract findMany(): Promise<CartItem[]>
  abstract findManyByTicketId(ticketId: string): Promise<CartItem[]>
  abstract findManyByCartId(cartId: string): Promise<CartItem[]>
  abstract create(cartItem: CartItem): Promise<void>
}
