import { Entity, UniqueEntityID } from '@/domain/entities'

interface PriceProps {
  ticketId: UniqueEntityID
  discount: number
  originalValue: number
  value: number
  createdAt: Date
}

export class Price extends Entity<PriceProps> {
  static create(props: PriceProps, id?: UniqueEntityID): Price {
    return new Price(props, id)
  }
}
