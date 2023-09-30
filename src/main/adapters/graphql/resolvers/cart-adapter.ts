import { GraphqlCartMapper } from '@/main/graphql/mappers'
import { makeFetchCartsUseCase, makeGetCartUseCase } from '@/main/factories/usecases'

export class CartResolverAdapter {
  static async cart(id: string) {
    const usecase = makeGetCartUseCase()
    const response = await usecase.execute({ id })

    if (!response.value?.cart) {
      return null
    }

    return GraphqlCartMapper.toGraphql(response.value?.cart)
  }

  static async carts() {
    const usecase = makeFetchCartsUseCase()
    const response = await usecase.execute()

    return response.value?.carts.map(GraphqlCartMapper.toGraphql)
  }
}