import { Entity, UniqueEntityID } from '@/domain/entities'

interface ReviewProps {
  ticketId: UniqueEntityID
  value: number
  createdAt: Date
}

export class Review extends Entity<ReviewProps> {
  static create(props: ReviewProps, id?: UniqueEntityID): Review {
    return new Review(props, id)
  }
}
