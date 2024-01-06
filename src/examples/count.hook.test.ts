import { renderHook, act } from "@testing-library/react-hooks"
import { useCount } from "./count.hook"

describe("hook", () => {
  test("should render default value", () => {
    const { result } = renderHook(() => useCount())

    expect(result.current.value).toBe(0)
  })

  test("should increment value", () => {
    const { result } = renderHook(() => useCount())

    act(() => {
      result.current.increment()
    })

    expect(result.current.value).toBe(1)
  })
})
