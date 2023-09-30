import { Entity, UniqueEntityID } from '@/domain/entities'

export interface TicketProps {
  name: string
  description: string
  imageUrl: string
  amenities?: string[]
  createdAt: Date
  updatedAt?: Date | null
}

export class Ticket extends Entity<TicketProps> {
  static create(props: TicketProps, id?: UniqueEntityID): Ticket {
    return new Ticket(props, id)
  }
}
