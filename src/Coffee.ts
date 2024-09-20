import { Beverage } from "./Beverage.js"
import { Money } from "./Money.js"

export class Coffee extends Beverage {
  basePrice: Money = Money.createNew(1.2)
}
