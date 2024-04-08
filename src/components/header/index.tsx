import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import {
  Aside,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Content,
} from './styles'

export function Header() {
  const { numberOfItemsOnCart } = useCart()
  return (
    <Container>
      <Content className="container">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <Aside>
          <ButtonPrimary>
            <MapPin size={20} weight="fill" />
            Jacobina, BA
          </ButtonPrimary>
          <Link to="/checkout">
            <ButtonSecondary>
              <ShoppingCart size={20} weight="fill" />
              {numberOfItemsOnCart > 0 && <span>{numberOfItemsOnCart}</span>}
            </ButtonSecondary>
          </Link>
        </Aside>
      </Content>
    </Container>
  )
}
