import { IGetTicketUseCase } from '@/domain/usecases'
import { Either, success } from '@/utils/either'
import { Ticket } from '@/domain/entities'
import { TicketRepository } from '@/application/protocols'

type FetchTicketsUseCaseRequest = { id: string }
type FetchTicketsUseCaseResponse = Either<null, { ticket: Ticket | null }>

export class GetTicketUseCase implements IGetTicketUseCase<FetchTicketsUseCaseRequest, FetchTicketsUseCaseResponse> {
  constructor(private ticketRepository: TicketRepository) {
  }

  async execute({ id }: FetchTicketsUseCaseRequest): Promise<FetchTicketsUseCaseResponse> {
    const ticket = await this.ticketRepository.findById(id)

    return success({ ticket })
  }
}
