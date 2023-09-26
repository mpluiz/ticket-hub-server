import { Entity, UniqueEntityID } from '@/domain/entities'

interface Review {
  id: string
  score: number
}

interface Price {
  id: string
  amount: number // 213.01
  originalAmount: number // 231.53
  discount: number // 8
}

export interface Address {
  id: string
  city: string
  country: string
  state: string
}

interface Amenitie {
  id: string
  name: string
  key: string
}

interface TicketProps {
  name: string
  description: string
  imageUrl: string
  address: Address
  price: Price
  review: Review
  amenities: Amenitie[]
}

export class Ticket extends Entity<TicketProps> {
  static create(props: TicketProps, id?: UniqueEntityID): Ticket {
    return new Ticket(props, id)
  }
}
