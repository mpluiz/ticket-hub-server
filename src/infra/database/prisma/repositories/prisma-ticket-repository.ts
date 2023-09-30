import { PrismaClient } from '@prisma/client'
import { PaginatedData, RepositoryParams, TicketRepository } from '@/application/protocols'
import { Ticket } from '@/domain/entities'
import { PrismaTicketMapper } from '@/infra/database/prisma/mappers/prisma-ticket-mapper'
import { PaginationHelper } from '@/utils/pagination'

export class PrismaTicketRepository implements TicketRepository {
  constructor(private prisma: PrismaClient) {
  }

  async findById(id: string): Promise<Ticket | null> {
    const ticket = await this.prisma.ticket.findUnique({ where: { id } })

    if (!ticket) {
      return null
    }

    return PrismaTicketMapper.toDomain(ticket)
  }

  async findMany({ pagination: { page, perPage } }: RepositoryParams): Promise<PaginatedData<Ticket[]>> {
    const count = await this.prisma.ticket.count()

    const pagination = PaginationHelper.create({
      page,
      perPage,
      totalItems: count
    })

    const tickets = await this.prisma.ticket.findMany({
      skip: pagination.offset,
      take: pagination.perPage
    })

    return { data: tickets.map(PrismaTicketMapper.toDomain), pagination }
  }
}
