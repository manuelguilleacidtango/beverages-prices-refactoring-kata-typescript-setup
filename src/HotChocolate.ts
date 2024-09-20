import { Beverage } from "./Beverage.js"
import { Money } from "./Money.js"

export class HotChocolate extends Beverage {
  basePrice: Money = Money.createNew(1.45)
}
