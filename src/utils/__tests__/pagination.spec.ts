import { PaginationHelper } from '@/utils/pagination'

describe('PaginationHelper', () => {
  it('should create a pagination with correct values', () => {
    const usecase = PaginationHelper.create({ page: 1, perPage: 10, totalItems: 100 })

    expect(usecase.offset).toBe(0)
    expect(usecase.totalPages).toBe(10)
  })

  it('should get correct pagination values', () => {
    const usecase = PaginationHelper.create({ page: 10, perPage: 5, totalItems: 1000 })

    expect(usecase.page).toBe(10)
    expect(usecase.perPage).toBe(5)
    expect(usecase.offset).toBe(45)
    expect(usecase.totalPages).toBe(200)
  })
})
