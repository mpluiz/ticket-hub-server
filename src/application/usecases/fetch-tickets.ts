import { IFetchTicketsUseCase } from '@/domain/usecases'
import { Either, success } from '@/utils/either'
import { Ticket } from '@/domain/entities'
import { TicketRepository } from '@/application/protocols'

type FetchTicketsUseCaseResponse = Either<null, { tickets: Ticket[] | null }>

export class FetchTicketsUseCase implements IFetchTicketsUseCase<any, FetchTicketsUseCaseResponse> {
  constructor(private ticketRepository: TicketRepository) {
  }

  async execute(): Promise<FetchTicketsUseCaseResponse> {
    const tickets = await this.ticketRepository.findMany()

    return success({ tickets })
  }
}
