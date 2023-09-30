import { CartRepository } from '@/application/protocols'
import { Either, success } from '@/utils/either'
import { Cart } from '@/domain/entities'

type CreateCartUseCaseResponse = Either<null, { cart: Cart }>

export class CreateCartUseCase {
  constructor(private cartRepository: CartRepository) {}

  async execute(): Promise<CreateCartUseCaseResponse> {
    const emptyCart = Cart.create({
      total: 0,
      subTotal: 0,
      createdAt: new Date()
    })

    await this.cartRepository.create(emptyCart)

    return success({ cart: emptyCart })
  }
}
