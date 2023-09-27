import { Ticket as PrismaTicket, Prisma } from '@prisma/client'
import { Ticket, UniqueEntityID } from '@/domain/entities'

export class PrismaTicketMapper {
  static toDomain(raw: PrismaTicket): Ticket {
    return Ticket.create(
      {
        name: raw.name,
        description: raw.description,
        imageUrl: raw.imageUrl,
        amenities: raw.amenities,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt
      },
      new UniqueEntityID(raw.id)
    )
  }

  static toPrisma(ticket: Ticket): Prisma.TicketUncheckedCreateInput {
    const { name, description, imageUrl, amenities, createdAt, updatedAt } = ticket.toValue()
    return {
      id: ticket.id.toString(),
      name,
      description,
      imageUrl,
      amenities,
      createdAt,
      updatedAt
    }
  }
}
