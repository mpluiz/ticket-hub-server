import { Either, success } from '@/utils/either'
import { Ticket } from '@/domain/entities'
import { PaginationParams, TicketRepository } from '@/application/protocols'
import { PaginationHelper } from '@/utils/pagination'

type FetchTicketsUseCaseRequest = { pagination: PaginationParams }
type FetchTicketsUseCaseResponse = Either<null, { tickets: Ticket[], pagination: PaginationHelper }>

export class FetchTicketsUseCase {
  constructor(private ticketRepository: TicketRepository) {
  }

  async execute({ pagination }: FetchTicketsUseCaseRequest): Promise<FetchTicketsUseCaseResponse> {
    const response = await this.ticketRepository.findMany({ pagination })

    return success({ tickets: response.data, pagination: response.pagination })
  }
}
