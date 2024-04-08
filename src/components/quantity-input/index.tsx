import { MinusCircle, PlusCircle } from 'phosphor-react'
import { Container } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncrementItemQuantity: () => void
  onDecrementItemQuantity: () => void
}

export function QuantityInput({
  onIncrementItemQuantity,
  onDecrementItemQuantity,
  quantity,
}: QuantityInputProps) {
  const isDecrementButtonDisabled = quantity <= 1

  return (
    <Container>
      <button
        disabled={isDecrementButtonDisabled}
        onClick={onDecrementItemQuantity}
      >
        <MinusCircle weight="fill" size={20} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrementItemQuantity}>
        <PlusCircle weight="fill" size={20} />
      </button>
    </Container>
  )
}
