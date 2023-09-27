import { PrismaClient } from '@prisma/client'
import { TicketRepository } from '@/application/protocols'
import { Ticket } from '@/domain/entities'
import { PrismaTicketMapper } from '@/infra/database/prisma/mappers/prisma-ticket-mapper'

export class PrismaTicketRepository implements TicketRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<Ticket | null> {
    const ticket = await this.prisma.ticket.findUnique({ where: { id } })

    if (!ticket) {
      return null
    }

    return PrismaTicketMapper.toDomain(ticket)
  }

  async findMany(): Promise<Ticket[]> {
    const tickets = await this.prisma.ticket.findMany()
    return tickets.map(PrismaTicketMapper.toDomain)
  }
}
