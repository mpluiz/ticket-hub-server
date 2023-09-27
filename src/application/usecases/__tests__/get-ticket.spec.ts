import { InMemoryTicketRepository } from '@tests/repositories'
import { makeTicket } from '@tests/factories'
import { Ticket, UniqueEntityID } from '@/domain/entities'
import { GetTicketUseCase } from '@/application/usecases'

let inMemoryTicketRepository: InMemoryTicketRepository
let sut: GetTicketUseCase
let ticket: Ticket

describe('GetTicketUseCase', () => {
  beforeEach(() => {
    inMemoryTicketRepository = new InMemoryTicketRepository()
    sut = new GetTicketUseCase(inMemoryTicketRepository)
  })

  it('should success to get a ticket when provide a valid id', async () => {
    const id = new UniqueEntityID('valid-id')
    ticket = makeTicket({}, id)
    inMemoryTicketRepository.tickets = [ticket]

    const response = await sut.execute({ id: id.toString() })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.ticket?.id.toString()).toEqual('valid-id')
    expect(response.value?.ticket?.id.toString()).toEqual(id.toString())
  })
})
