import { ExtraItem } from "./ExtraItem.js"
import { Money } from "./Money.js"

export abstract class Beverage {
  basePrice!: Money

  price(): number {
    return this.basePrice.getValue()
  }

  addExtra(extraItem: ExtraItem) {
    this.basePrice = this.basePrice.sum(extraItem.price)
    return this
  }
}
