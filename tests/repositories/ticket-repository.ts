import { PaginatedData, RepositoryParams, TicketRepository } from '@/application/protocols'
import { Ticket } from '@/domain/entities'
import { PaginationHelper } from '@/utils/pagination'

export class InMemoryTicketRepository implements TicketRepository {
  public tickets: Ticket[] = []

  async findById(id: any): Promise<Ticket | null> {
    const index = this.tickets.findIndex(ticket => ticket.id.toString() === id)
    return this.tickets[index]
  }

  async findMany(params: RepositoryParams): Promise<PaginatedData<Ticket[]>> {
    return {
      data: this.tickets,
      pagination: PaginationHelper.create({ ...params.pagination, totalItems: this.tickets.length })
    }
  }
}
