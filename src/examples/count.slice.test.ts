import { countSlice } from "./count.slice"

describe("count slice", () => {
  it("should handle initial state", () => {
    const actual = countSlice.reducer(undefined, { type: "unknown" })

    expect(actual).toEqual({ value: 0 })
  })

  it("should handle increment", () => {
    const actual = countSlice.reducer(
      { value: 0 },
      countSlice.actions.increment(),
    )
    expect(actual.value).toBe(1)
  })
})
