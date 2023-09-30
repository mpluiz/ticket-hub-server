import { Either, success } from '@/utils/either'
import { Cart } from '@/domain/entities'
import { CartRepository } from '@/application/protocols'

type FetchCartsUseCaseResponse = Either<null, { carts: Cart[] }>

export class FetchCartsUseCase {
  constructor(private cartRepository: CartRepository) {
  }

  async execute(): Promise<FetchCartsUseCaseResponse> {
    const carts = await this.cartRepository.findMany()

    return success({ carts })
  }
}
