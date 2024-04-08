import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import {
  Aside,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Content,
} from './styles'

export function Header() {
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
              <span>1</span>
            </ButtonSecondary>
          </Link>
        </Aside>
      </Content>
    </Container>
  )
}
