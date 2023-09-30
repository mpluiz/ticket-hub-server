import PrismaClient from '@/infra/database/prisma/client'
import { CreateCartItemUseCase } from '@/application/usecases'
import { PrismaCartItemRepository } from '@/infra/database/prisma/repositories/prisma-cart-item-repository'

export function makeCreateCartItemUseCase(): CreateCartItemUseCase {
  const repository = new PrismaCartItemRepository(PrismaClient)
  const usecase = new CreateCartItemUseCase(repository)
  return usecase
}
