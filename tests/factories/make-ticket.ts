import { Address, Price, Ticket, TicketProps, UniqueEntityID } from '@/domain/entities'

export function makeTicket(override: Partial<TicketProps> = {}, id?: UniqueEntityID): Ticket {
  const defaultId = id ?? new UniqueEntityID('valid-ticket-id')
  const ticket = Ticket.create({
    name: 'valid-name',
    description: 'valid-description',
    imageUrl: 'https://valid-url.com',
    amenities: ['valid-amenitie'],
    price: Price.create({
      ticketId: defaultId,
      amount: 100,
      discount: 0,
      createdAt: new Date()
    }),
    address: Address.create({
      ticketId: defaultId,
      city: 'valid-city',
      state: 'valid-state',
      country: 'valid-country',
      createdAt: new Date()
    }),
    createdAt: new Date(),
    ...override
  }, defaultId)

  return ticket
}
