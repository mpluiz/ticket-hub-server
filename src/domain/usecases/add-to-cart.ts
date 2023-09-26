export interface IAddToCartUseCase<T, R> {
  execute(params: T): Promise<R>
}
