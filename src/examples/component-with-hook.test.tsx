import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Component } from "./component-with-hook"

describe("Component", () => {
  it("should increment count after click", async () => {
    render(<Component />)

    const count = screen.getByTestId("count")

    expect(within(count).getByText("0")).toBeInTheDocument()

    const button = screen.getByTestId("increment")

    await userEvent.click(button)

    expect(within(count).getByText("1")).toBeInTheDocument()
  })
})
