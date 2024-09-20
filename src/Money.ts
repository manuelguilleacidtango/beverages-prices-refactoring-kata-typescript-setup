export class Money {
  value!: number

  private constructor(value: number) {
    this.value = value
  }

  static createNew(value: number) {
    return new Money(value)
  }

  getValue() {
    return this.value
  }

  sum(money: Money) {
    return new Money(this.value + money.getValue())
  }
}
