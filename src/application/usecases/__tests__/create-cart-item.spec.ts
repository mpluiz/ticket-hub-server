import { InMemoryCartItemRepository } from '@tests/repositories'
import { CreateCartItemUseCase } from '@/application/usecases'
import { CartItem } from '@/domain/entities'
import { makeCart, makeTicket } from '@tests/factories'

let inMemoryCartItemRepository: InMemoryCartItemRepository
let sut: CreateCartItemUseCase

describe('CreateCartItemUseCase', () => {
  beforeEach(() => {
    inMemoryCartItemRepository = new InMemoryCartItemRepository()
    sut = new CreateCartItemUseCase(inMemoryCartItemRepository)
  })

  it('should success to create cart item', async () => {
    const ticket = makeTicket()
    const cart = makeCart()

    const response = await sut.execute({
      cartId: cart.id.toString(),
      ticketId: ticket.id.toString(),
      quantity: 1
    })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.cartItem).toBeInstanceOf(CartItem)
  })
})
