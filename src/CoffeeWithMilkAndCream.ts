import { Coffee } from "./Coffee.js"

export class CoffeeWithMilkAndCream extends Coffee {
  price(): number {
    return super.price() + 0.25
  }
}
