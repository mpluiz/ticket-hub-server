import { InMemoryCartRepository } from '@tests/repositories'
import { Cart, UniqueEntityID } from '@/domain/entities'
import { GetCartUseCase } from '@/application/usecases'
import { makeCart } from '@tests/factories'

let inMemoryCartRepository: InMemoryCartRepository
let sut: GetCartUseCase
let cart: Cart

describe('GetCartUseCase', () => {
  beforeEach(() => {
    inMemoryCartRepository = new InMemoryCartRepository()
    sut = new GetCartUseCase(inMemoryCartRepository)
  })

  it('should success to get a cart when provide a valid id', async () => {
    const id = new UniqueEntityID('valid-id')
    cart = makeCart({}, id)
    inMemoryCartRepository.carts = [cart]

    const response = await sut.execute({ id: id.toString() })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.cart?.id.toString()).toEqual('valid-id')
    expect(response.value?.cart?.id.toString()).toEqual(id.toString())
  })
})
