import { CartItem, CartItemProps, UniqueEntityID } from '@/domain/entities'
import { makeTicket, makeCart } from '@tests/factories'

export function makeCartItem(override: Partial<CartItemProps> = {}, id?: UniqueEntityID): CartItem {
  const ticket = makeTicket()
  const cart = makeCart()

  const cartItem = CartItem.create({
    cartId: cart.id,
    ticketId: ticket.id,
    quantity: 1,
    subTotal: 1391.60,
    createdAt: new Date(),
    ...override
  }, id)

  return cartItem
}
