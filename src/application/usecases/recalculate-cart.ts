import { Either, failure, success } from '@/utils/either'
import { Cart } from '@/domain/entities'
import { CartItemRepository, CartRepository } from '@/application/protocols'

type RecalculateCartUseCaseRequest = { id: string }
type RecalculateCartUseCaseResponse = Either<null, { cart: Cart }>

export class RecalculateCartUseCase {
  constructor(private cartRepository: CartRepository, private cartItemRepository: CartItemRepository) {
  }

  async execute({ id }: RecalculateCartUseCaseRequest): Promise<RecalculateCartUseCaseResponse> {
    const cart = await this.cartRepository.findById(id)
    const cartItems = await this.cartItemRepository.findManyByCartId(id)

    if (!cart) {
      return failure(null)
    }

    const cartItemsSubTotal = cartItems.reduce((acc, cur) => (cur.subTotal * cur.quantity) + acc, 0)

    cart.total = cartItemsSubTotal
    cart.subTotal = cartItemsSubTotal

    await this.cartRepository.update(cart)

    return success({ cart })
  }
}
