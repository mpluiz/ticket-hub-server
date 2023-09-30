import { Either, success } from '@/utils/either'
import { Ticket } from '@/domain/entities'
import { TicketRepository } from '@/application/protocols'

type GetTicketUseCaseRequest = { id: string }
type GetTicketUseCaseResponse = Either<null, { ticket: Ticket | null }>

export class GetTicketUseCase {
  constructor(private ticketRepository: TicketRepository) {
  }

  async execute({ id }: GetTicketUseCaseRequest): Promise<GetTicketUseCaseResponse> {
    const ticket = await this.ticketRepository.findById(id)

    return success({ ticket })
  }
}
