import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInput } from '../../../../components/quantity-input'
import { useCart } from '../../../../hooks/useCart'
import { defaultTheme } from '../../../../styles/themes/default'
import { Button, Container, Content, Footer, Header, Price } from './styles'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const { addItemToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleIncrementItemQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementItemQuantity() {
    setQuantity((state) => {
      if (state > 1) {
        return state - 1
      }

      return state
    })
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addItemToCart(coffeeToAdd)
  }
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
        <QuantityInput
          onIncrementItemQuantity={handleIncrementItemQuantity}
          onDecrementItemQuantity={handleDecrementItemQuantity}
          quantity={quantity}
        />
        <Button onClick={handleAddToCart}>
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
