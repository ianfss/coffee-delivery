import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import { QuantityInput } from '../../components/quantity-input'
import { useCart } from '../../hooks/useCart'
import { PaymentMethod } from './components/payment-method'
import { TextInput } from './components/text-input'
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from './styles'

const shippingPrice = 3.5

export function CheckoutPage() {
  const {
    cart,
    decrementItemQuantity,
    incrementItemQuantity,
    removeItemFromCart,
  } = useCart()

  const totalItemsPrice = cart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <PaymentMethod isSelected={true} value="credit">
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </PaymentMethod>

                <PaymentMethod isSelected={false} value="debit">
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </PaymentMethod>

                <PaymentMethod isSelected={false} value="cash">
                  <Money size={16} />
                  <span>Dinheiro</span>
                </PaymentMethod>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          {cart.map((item) => {
            return (
              <Coffee key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />

                  <div>
                    <span>{item.title}</span>

                    <CoffeeInfo>
                      <QuantityInput
                        quantity={item.quantity}
                        onDecrementItemQuantity={() => {
                          decrementItemQuantity(item.id)
                        }}
                        onIncrementItemQuantity={() => {
                          incrementItemQuantity(item.id)
                        }}
                      />

                      <button
                        onClick={() => {
                          removeItemFromCart(item.id)
                        }}
                      >
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {item.price.toFixed(2)}</aside>
              </Coffee>
            )
          })}

          <span />

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </CartTotalInfo>

          <Link to="/success">
            <CheckoutButton type="submit" form="order">
              Confirmar pedido
            </CheckoutButton>
          </Link>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
