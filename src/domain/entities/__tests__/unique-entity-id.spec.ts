import { randomUUID } from 'node:crypto'
import { UniqueEntityID } from '@/domain/entities'

describe('UniqueEntityID', () => {
  it('should generate a random value when not provide a value', () => {
    const sut = new UniqueEntityID()

    expect(sut.toString()).toBeTruthy()
  })

  it('should create an UniqueEntityId when provide a custom value', () => {
    const customId = randomUUID()
    const sut = new UniqueEntityID(customId)

    expect(sut.toString()).toEqual(customId)
  })
})
