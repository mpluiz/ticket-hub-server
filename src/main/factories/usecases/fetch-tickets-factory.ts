import PrismaClient from '@/infra/database/prisma/client'
import { FetchTicketsUseCase } from '@/application/usecases'
import { PrismaTicketRepository } from '@/infra/database/prisma/repositories/prisma-ticket-repository'

export function makeFetchTicketsUseCase(): FetchTicketsUseCase {
  const repository = new PrismaTicketRepository(PrismaClient)
  const usecase = new FetchTicketsUseCase(repository)
  return usecase
}
