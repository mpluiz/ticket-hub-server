import { Ticket } from '@/domain/entities'
import { PaginatedData, RepositoryParams } from '@/application/protocols'

export abstract class TicketRepository {
  abstract findById(id: string): Promise<Ticket | null>
  abstract findMany(params: RepositoryParams): Promise<PaginatedData<Ticket[]>>
}
