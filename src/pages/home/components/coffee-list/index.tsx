import { coffees } from '../../../../../data.json'
import { Card } from '../card'
import { Container } from './styles'

export function CoffeeList() {
  return (
    <Container>
      <h2>Nossos cafés</h2>

      <div>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </Container>
  )
}
