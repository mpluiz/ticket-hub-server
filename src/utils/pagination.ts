export interface PaginationHelperProps {
  page: number
  perPage: number
  offset?: number
  totalItems: number
  totalPages?: number
}

export class PaginationHelper {
  public page: number
  public perPage: number
  public offset: number
  public totalItems: number
  public totalPages: number

  private constructor({ page, perPage, offset = 0, totalItems, totalPages = 0 }: PaginationHelperProps) {
    this.page = page
    this.perPage = perPage
    this.offset = offset
    this.totalItems = totalItems
    this.totalPages = totalPages
  }

  static create({ page, perPage, totalItems }: PaginationHelperProps): PaginationHelper {
    const offset = (page - 1) * perPage
    const totalPages = Math.ceil(totalItems / perPage)
    return new PaginationHelper({ page, perPage, offset, totalItems, totalPages })
  }

  toValue() {
    return {
      page: this.page,
      perPage: this.perPage,
      offset: this.offset,
      totalItems: this.totalItems,
      totalPages: this.totalPages
    }
  }
}
