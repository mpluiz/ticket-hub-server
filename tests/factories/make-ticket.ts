import { Ticket, TicketProps, UniqueEntityID } from '@/domain/entities'

export function makeTicket(override: Partial<TicketProps> = {}, id?: UniqueEntityID): Ticket {
  const defaultId = id ?? new UniqueEntityID('valid-ticket-id')
  const ticket = Ticket.create({
    name: 'valid-name',
    description: 'valid-description',
    imageUrl: 'https://valid-url.com',
    amenities: ['valid-amenitie'],
    createdAt: new Date(),
    ...override
  }, defaultId)

  return ticket
}
