import { PaginationHelper } from '@/utils/pagination'

export interface PaginationParams {
  page: number
  perPage: number
  orderBy?: string
}

export interface RepositoryParams {
  pagination: PaginationParams
}

export interface PaginatedData<T> {
  data: T,
  pagination: PaginationHelper
}
