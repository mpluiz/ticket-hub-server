import { InMemoryTicketRepository } from '@tests/repositories'
import { makeTicket } from '@tests/factories'
import { FetchTicketsUseCase } from '@/application/usecases'
import { Ticket } from '@/domain/entities'

let inMemoryTicketRepository: InMemoryTicketRepository
let sut: FetchTicketsUseCase
let ticket: Ticket

describe('FetchTicketsUseCase', () => {
  beforeEach(() => {
    inMemoryTicketRepository = new InMemoryTicketRepository()
    sut = new FetchTicketsUseCase(inMemoryTicketRepository)
    ticket = makeTicket()
  })

  it('should success to fetch tickets', async () => {
    inMemoryTicketRepository.tickets = [ticket]
    const response = await sut.execute()

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.tickets).toHaveLength(1)
  })
})
