import { makeFetchTicketsUseCase, makeGetTicketUseCase } from '@/main/factories/usecases'
import { GraphqlTicketMapper } from '@/main/graphql/mappers'

export class TicketResolverAdapter {
  static async ticket(id: string) {
    const usecase = makeGetTicketUseCase()
    const response = await usecase.execute({ id })

    if (!response.value?.ticket) {
      return null
    }

    return GraphqlTicketMapper.toGraphql(response.value?.ticket)
  }

  static async paginatedTickets(_: any, { searchOptions: { term, pagination } }: any) {
    const usecase = makeFetchTicketsUseCase()
    const response = await usecase.execute({ term, pagination })

    if (response.isFailure()) {
      return { tickets: null, pagination: null }
    }

    return GraphqlTicketMapper.paginatedData(response.value.tickets, response.value.pagination)
  }
}
