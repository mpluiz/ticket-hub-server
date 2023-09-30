import { Either, success } from '@/utils/either'
import { Cart } from '@/domain/entities'
import { CartRepository } from '@/application/protocols'

type GetCartUseCaseRequest = { id: string }
type GetCartUseCaseResponse = Either<null, { cart: Cart | null }>

export class GetCartUseCase {
  constructor(private cartRepository: CartRepository) {
  }

  async execute({ id }: GetCartUseCaseRequest): Promise<GetCartUseCaseResponse> {
    const cart = await this.cartRepository.findById(id)

    return success({ cart })
  }
}
