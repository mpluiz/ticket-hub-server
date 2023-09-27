import { Ticket } from '@/domain/entities'

export abstract class TicketRepository {
  abstract findById(id: string): Promise<Ticket | null>
  abstract findMany(): Promise<Ticket[]>
}
