import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/quantity-input'
import { defaultTheme } from '../../../../styles/themes/default'
import { Button, Container, Content, Footer, Header, Price } from './styles'

interface CardProps {
  coffee: {
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} />
      <Header>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Header>
      <Content>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>
      </Content>
      <Footer>
        <Price>
          <span>R$ </span>
          {coffee.price.toFixed(2)}
        </Price>
        <QuantityInput />
        <Button>
          <ShoppingCart
            weight="fill"
            size={22}
            color={defaultTheme.colors.baseCard}
          />
        </Button>
      </Footer>
    </Container>
  )
}
