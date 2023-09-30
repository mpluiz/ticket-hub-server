import PrismaClient from '@/infra/database/prisma/client'
import { PrismaCartRepository } from '@/infra/database/prisma/repositories/prisma-cart-repository'
import { FetchCartsUseCase } from '@/application/usecases/fetch-carts'

export function makeFetchCartsUseCase(): FetchCartsUseCase {
  const repository = new PrismaCartRepository(PrismaClient)
  const usecase = new FetchCartsUseCase(repository)
  return usecase
}
