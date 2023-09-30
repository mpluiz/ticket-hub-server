import { InMemoryCartRepository } from '@tests/repositories'
import { Cart } from '@/domain/entities'
import { CreateCartUseCase } from '@/application/usecases'

let inMemoryCartRepository: InMemoryCartRepository
let sut: CreateCartUseCase

describe('CreateCartUseCase', () => {
  beforeEach(() => {
    inMemoryCartRepository = new InMemoryCartRepository()
    sut = new CreateCartUseCase(inMemoryCartRepository)
  })

  it('should success to create a empty cart', async () => {
    const response = await sut.execute()

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.cart).toBeInstanceOf(Cart)
  })
})
