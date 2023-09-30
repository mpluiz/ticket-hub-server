import { Ticket } from '@/domain/entities'
import { PaginationHelper } from '@/utils/pagination'

export class GraphqlTicketMapper {
  static toGraphql(ticket: Ticket): any {
    return ticket.toValue()
  }

  static paginatedData(tickets: Ticket[], pagination: PaginationHelper) {
    return {
      pageInfo: pagination.toValue(),
      tickets: tickets.map(this.toGraphql)
    }
  }
}
