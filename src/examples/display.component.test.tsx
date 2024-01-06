import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Display } from "./display.component"

describe("Display", () => {
  test("should render count", () => {
    render(<Display count={4} />)

    const count = screen.getByTestId("count")

    expect(within(count).getByText("4")).toBeInTheDocument()
  })

  test("should call passed callback to onIncrement prop", async () => {
    const callbackMock = vi.fn() // Использую vitest

    render(<Display count={0} onIncrement={callbackMock} />)

    const button = screen.getByTestId("increment")

    await userEvent.click(button)

    expect(callbackMock).toHaveBeenCalled()
  })
})
