import { Beverage } from "./Beverage.js"
import { ExtraCream } from "./ExtraCream.js"
import { ExtraItem } from "./ExtraItem.js"
import { Money } from "./Money.js"

export class Tea extends Beverage {
  basePrice: Money = Money.createNew(1.5)

  addExtra(extraItem: ExtraItem) {
    if (extraItem instanceof ExtraCream) throw new Error("Tea can not have cream")
    this.basePrice = this.basePrice.sum(extraItem.price)
    return this
  }
}
