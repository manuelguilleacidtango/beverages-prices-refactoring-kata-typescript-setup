import { ExtraItem } from "./ExtraItem.js"
import { Money } from "./Money.js"

export class ExtraCinammon implements ExtraItem {
  price = Money.createNew(0.05)
}
