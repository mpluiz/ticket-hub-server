import PrismaClient from '@/infra/database/prisma/client'
import { GetTicketUseCase } from '@/application/usecases'
import { PrismaTicketRepository } from '@/infra/database/prisma/repositories/prisma-ticket-repository'

export function makeGetTicketUseCase(): GetTicketUseCase {
  const repository = new PrismaTicketRepository(PrismaClient)
  const usecase = new GetTicketUseCase(repository)
  return usecase
}
