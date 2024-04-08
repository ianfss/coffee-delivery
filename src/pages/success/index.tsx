import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, Heading, Info, InfoContent, Order } from './styles'

export function SuccessPage() {
  const theme = useTheme()

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.primary }}
                size={32}
              />

              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>

                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.secondary }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.secondaryDark }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído" />
    </Container>
  )
}
