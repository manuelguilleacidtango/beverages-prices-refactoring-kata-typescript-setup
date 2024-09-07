import { Coffee } from "./Coffee.js"

export class CoffeeWithMilk extends Coffee {
  price(): number {
    return super.price() + 0.1
  }
}
