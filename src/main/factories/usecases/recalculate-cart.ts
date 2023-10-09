import PrismaClient from '@/infra/database/prisma/client'
import { PrismaCartItemRepository, PrismaCartRepository } from '@/infra/database/prisma/repositories'
import { RecalculateCartUseCase } from '@/application/usecases'

export function makeRecalculateCart(): RecalculateCartUseCase {
  const repository = new PrismaCartRepository(PrismaClient)
  const cartItemRepository = new PrismaCartItemRepository(PrismaClient)
  const usecase = new RecalculateCartUseCase(repository, cartItemRepository)
  return usecase
}
