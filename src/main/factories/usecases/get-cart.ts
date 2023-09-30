import PrismaClient from '@/infra/database/prisma/client'
import { GetCartUseCase } from '@/application/usecases/get-cart'
import { PrismaCartRepository } from '@/infra/database/prisma/repositories/prisma-cart-repository'

export function makeGetCartUseCase(): GetCartUseCase {
  const repository = new PrismaCartRepository(PrismaClient)
  const usecase = new GetCartUseCase(repository)
  return usecase
}
