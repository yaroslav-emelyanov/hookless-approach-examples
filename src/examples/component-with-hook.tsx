import { useState } from "react"

export const Component: React.FC = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((c) => c + 1)
  }
  return (
    <div>
      <div>
        <b>count:</b> <span data-testid="count">{count}</span>
      </div>
      <button data-testid="increment" onClick={handleIncrement}>
        increment
      </button>
    </div>
  )
}
