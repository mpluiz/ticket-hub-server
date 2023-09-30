import { Either, failure, success } from '@/utils/either'
import { CartItemRepository } from '@/application/protocols'

type DeleteCartItemUseCaseRequest = { id: string }
type DeleteCartItemUseCaseResponse = Either<null, boolean>

export class DeleteCartItemUseCase {
  constructor(private cartItemRepository: CartItemRepository) {}

  async execute({ id }: DeleteCartItemUseCaseRequest): Promise<DeleteCartItemUseCaseResponse> {
    try {
      await this.cartItemRepository.delete(id)

      return success(true)
    } catch (error) {
      return failure(null)
    }
  }
}
