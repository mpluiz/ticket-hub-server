import { Address } from '@/domain/entities'

export abstract class AddressRepository {
  abstract findById(id: string): Promise<Address | null>
  abstract findByTicketId(ticketId: string): Promise<Address | null>
  abstract findMany(): Promise<Address[]>
}
