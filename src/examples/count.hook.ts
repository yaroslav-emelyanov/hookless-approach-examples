import { useState } from "react"

export const useCount = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((c) => c + 1)
  }

  return { value: count, increment: handleIncrement }
}
