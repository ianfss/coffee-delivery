import { Coffee } from 'phosphor-react'
import { Container } from './styles'

export function EmptyState() {
  return (
    <Container>
      <Coffee weight="fill" size={20} />
      <span>Seu carrinho está vazio.</span>
    </Container>
  )
}
