import { Price } from '@/domain/entities'

export abstract class PriceRepository {
  abstract findById(id: string): Promise<Price | null>
  abstract findByTicketId(ticketId: string): Promise<Price | null>
  abstract findMany(): Promise<Price[]>
}
