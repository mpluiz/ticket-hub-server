import { Either, success } from '@/utils/either'
import { CartItemRepository } from '@/application/protocols'
import { CartItem, UniqueEntityID } from '@/domain/entities'

type CreateCartItemUseCaseRequest = { cartId: string, ticketId: string, quantity: number }
type CreateCartItemUseCaseResponse = Either<null, { cartItem: CartItem }>

export class CreateCartItemUseCase {
  constructor(private cartItemRepository: CartItemRepository) {}

  async execute({ cartId, ticketId, quantity }: CreateCartItemUseCaseRequest): Promise<CreateCartItemUseCaseResponse> {
    const cartItem = CartItem.create({
      cartId: new UniqueEntityID(cartId),
      ticketId: new UniqueEntityID(ticketId),
      quantity,
      createdAt: new Date()
    })

    await this.cartItemRepository.create(cartItem)

    return success({ cartItem })
  }
}
