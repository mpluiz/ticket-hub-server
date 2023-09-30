import { InMemoryCartRepository } from '@tests/repositories'
import { makeCart } from '@tests/factories'
import { FetchCartsUseCase } from '@/application/usecases'
import { Cart } from '@/domain/entities'

let inMemoryCartRepository: InMemoryCartRepository
let sut: FetchCartsUseCase
let cart: Cart

describe('FetchCartsUseCase', () => {
  beforeEach(() => {
    inMemoryCartRepository = new InMemoryCartRepository()
    sut = new FetchCartsUseCase(inMemoryCartRepository)
    cart = makeCart()
  })

  it('should success to fetch carts', async () => {
    inMemoryCartRepository.carts = [cart]
    const response = await sut.execute()

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.carts).toHaveLength(1)
    expect(response.value?.carts[0]).toBeInstanceOf(Cart)
  })
})
