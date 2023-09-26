export interface IGetCartUseCase<T, R> {
  execute(params: T): Promise<R>
}
