import { Either, success } from '@/utils/either'
import { CartItemRepository } from '@/application/protocols'
import { CartItem, UniqueEntityID } from '@/domain/entities'

type CreateCartItemUseCaseRequest = { cartId: string, ticketId: string, subTotal: number, quantity: number }
type CreateCartItemUseCaseResponse = Either<null, { cartItem: CartItem }>

export class CreateCartItemUseCase {
  constructor(private cartItemRepository: CartItemRepository) {}

  async execute({ cartId, ticketId, quantity, subTotal }: CreateCartItemUseCaseRequest): Promise<CreateCartItemUseCaseResponse> {
    const alreadyExistsCartItem = await this.cartItemRepository.findAlreadyExistsCartItem(cartId, ticketId)

    if (alreadyExistsCartItem) {
      alreadyExistsCartItem.quantity = alreadyExistsCartItem.quantity + quantity
      await this.cartItemRepository.update(alreadyExistsCartItem)

      return success({ cartItem: alreadyExistsCartItem })
    }

    const cartItem = CartItem.create({
      cartId: new UniqueEntityID(cartId),
      ticketId: new UniqueEntityID(ticketId),
      subTotal,
      quantity,
      createdAt: new Date()
    })

    await this.cartItemRepository.create(cartItem)

    return success({ cartItem })
  }
}
