import { useCount } from "./count.hook"
import { Display } from "./display.component"

export const Bloc = () => {
  const count = useCount()
  return <Display count={count.value} onIncrement={count.increment} />
}
