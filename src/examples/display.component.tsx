interface Props {
  count: number
  onIncrement?: () => void
}

export const Display: React.FC<Props> = ({ count, onIncrement }) => (
  <div>
    <div>
      <b>count:</b> <span data-testid="count">{count}</span>
    </div>
    <button data-testid="increment" onClick={onIncrement}>
      increment
    </button>
  </div>
)
