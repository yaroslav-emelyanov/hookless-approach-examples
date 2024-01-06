import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { configureStore } from "@reduxjs/toolkit"

import { Count } from "./count.component"
import { countSlice } from "./count.slice"

const store = configureStore({
  reducer: countSlice.reducer,
})

describe("HOC connect", () => {
  it("should increment count after click", async () => {
    render(<Count store={store} />)

    const count = screen.getByTestId("count")

    expect(within(count).getByText("0")).toBeInTheDocument()

    const button = screen.getByTestId("increment")

    await userEvent.click(button)

    expect(within(count).getByText("1")).toBeInTheDocument()
  })
})
