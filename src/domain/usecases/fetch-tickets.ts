export interface IFetchTicketsUseCase<T, R> {
  execute(params: T): Promise<R>
}
