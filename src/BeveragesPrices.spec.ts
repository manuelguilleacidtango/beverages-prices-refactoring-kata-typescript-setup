import { describe, expect, it } from "vitest"
import { Coffee } from "./Coffee.js"
import { HotChocolate } from "./HotChocolate.js"
import { Tea } from "./Tea.js"
import { ExtraMilk } from "./ExtraMilk.js"
import { ExtraCream } from "./ExtraCream.js"
import { ExtraCinammon } from "./ExtraCinammon.js"
import { ExtraItem } from "./ExtraItem.js"

describe("Beverages Prices", () => {
  it.each([
    [[], 1.2],
    [[new ExtraMilk()], 1.3],
    [[new ExtraMilk(), new ExtraCream()], 1.45],
    [[new ExtraCinammon()], 1.25],
  ])("compute offer price", (params, expected) => {
    const coffee = new Coffee()
    params.forEach((extra: ExtraItem) => {
      coffee.addExtra(extra)
    })
    expect(coffee.price()).toBeCloseTo(expected)
  })

  it.each([
    [[], 1.45],
    [[new ExtraMilk()], 1.55],
    [[new ExtraMilk(), new ExtraCream()], 1.7],
    [[new ExtraCinammon()], 1.5],
  ])("compute chocolate price", (params, expected) => {
    const chocolate = new HotChocolate()
    params.forEach((extra: ExtraItem) => {
      chocolate.addExtra(extra)
    })
    expect(chocolate.price()).toBeCloseTo(expected)
  })

  it.each([
    [[], 1.5],
    [[new ExtraMilk()], 1.6],
    [[new ExtraCinammon()], 1.55],
  ])("compute chocolate price", (params, expected) => {
    const tea = new Tea()
    params.forEach((extra: ExtraItem) => {
      tea.addExtra(extra)
    })
    expect(tea.price()).toBeCloseTo(expected)
  })

  it("tea cannot have cream supplement", () => {
    const tea = new Tea()

    expect(() => tea.addExtra(new ExtraCream())).toThrow(new Error("Tea can not have cream"))
  })
})
