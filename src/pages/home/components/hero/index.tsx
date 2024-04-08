import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, Content, Features, Heading } from './styles'

export function Hero() {
  const theme = useTheme()
  return (
    <Container>
      <img src="/images/hero-bg.svg" id="heroBg" alt="" />
      <Content>
        <div>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </Heading>
          <Features>
            <div>
              <ShoppingCart
                weight="fill"
                size={16}
                style={{ backgroundColor: theme.colors.secondaryDark }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                weight="fill"
                size={16}
                style={{ backgroundColor: theme.colors.baseText }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                weight="fill"
                size={16}
                style={{ backgroundColor: theme.colors.secondary }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                weight="fill"
                size={16}
                style={{ backgroundColor: theme.colors.primary }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </Features>
        </div>
        <img src="/images/hero.svg" alt="" />
      </Content>
    </Container>
  )
}
