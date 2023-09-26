export interface IRemoveFromCartUseCase<T, R> {
  execute(params: T): Promise<R>
}
