export interface IGetTicketUseCase<T, R> {
  execute(params: T): Promise<R>
}
