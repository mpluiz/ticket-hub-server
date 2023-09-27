import { Entity, UniqueEntityID } from '@/domain/entities'

interface AddressProps {
  ticketId: UniqueEntityID
  city: string
  state: string
  country: string
  createdAt: Date
}

export class Address extends Entity<AddressProps> {
  static create(props: AddressProps, id?: UniqueEntityID): Address {
    return new Address(props, id)
  }
}
