import { InMemoryCartItemRepository } from '@tests/repositories'
import { CartItem } from '@/domain/entities'
import { makeCartItem } from '@tests/factories'
import { DeleteCartItemUseCase } from '@/application/usecases/delete-cart-item'

let inMemoryCartItemRepository: InMemoryCartItemRepository
let sut: DeleteCartItemUseCase
let cartItem: CartItem

describe('DeleteCartItemUseCase', () => {
  beforeEach(() => {
    inMemoryCartItemRepository = new InMemoryCartItemRepository()
    sut = new DeleteCartItemUseCase(inMemoryCartItemRepository)
    cartItem = makeCartItem()
  })

  it('should success to delete a cart item', async () => {
    inMemoryCartItemRepository.cartItems.push(cartItem)

    const response = await sut.execute({ id: cartItem.id.toString() })

    expect(response.isSuccess()).toBe(true)
    expect(inMemoryCartItemRepository.cartItems).toHaveLength(0)
  })
})
