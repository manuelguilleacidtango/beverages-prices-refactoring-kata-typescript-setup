import { ExtraItem } from "./ExtraItem.js"
import { Money } from "./Money.js"

export class ExtraCream implements ExtraItem {
  price = Money.createNew(0.15)
}
