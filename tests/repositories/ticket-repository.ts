import { TicketRepository } from '@/application/protocols'
import { Ticket } from '@/domain/entities'

export class InMemoryTicketRepository implements TicketRepository {
  public tickets: Ticket[] = []

  async findById(id: any): Promise<Ticket | null> {
    const index = this.tickets.findIndex(ticket => ticket.id.toString() === id)
    return this.tickets[index]
  }

  async findMany(): Promise<Ticket[]> {
    return this.tickets
  }
}
