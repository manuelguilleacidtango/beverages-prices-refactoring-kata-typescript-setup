import { ExtraItem } from "./ExtraItem.js"
import { Money } from "./Money.js"

export class ExtraMilk implements ExtraItem {
  price = Money.createNew(0.1)
}
