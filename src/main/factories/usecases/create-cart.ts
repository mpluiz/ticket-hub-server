import PrismaClient from '@/infra/database/prisma/client'
import { CreateCartUseCase } from '@/application/usecases'
import { PrismaCartRepository } from '@/infra/database/prisma/repositories/prisma-cart-repository'

export function makeCreateCartUseCase(): CreateCartUseCase {
  const repository = new PrismaCartRepository(PrismaClient)
  const usecase = new CreateCartUseCase(repository)
  return usecase
}
