import PrismaClient from '@/infra/database/prisma/client'
import { PrismaCartItemRepository } from '@/infra/database/prisma/repositories/prisma-cart-item-repository'
import { DeleteCartItemUseCase } from '@/application/usecases/delete-cart-item'

export function makeDeleteCartItem(): DeleteCartItemUseCase {
  const repository = new PrismaCartItemRepository(PrismaClient)
  const usecase = new DeleteCartItemUseCase(repository)
  return usecase
}
