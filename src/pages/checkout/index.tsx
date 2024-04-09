import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { QuantityInput } from '../../components/quantity-input'
import { useCart } from '../../hooks/useCart'
import { EmptyState } from './components/empty-state'
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

const newCheckoutFormValidationSchema = z.object({
  cep: z.string().min(1),
  street: z.string().min(1),
  number: z.string().min(1),
  fullAddress: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1).max(2),
  paymentMethod: z.enum(['credit', 'debit', 'cash']),
})

export type NewCheckoutFormData = z.infer<
  typeof newCheckoutFormValidationSchema
>

const shippingPrice = 3.5

export function CheckoutPage() {
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      fullAddress: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
  })

  const { handleSubmit, register, watch } = newCheckoutForm

  const selectedPaymentMethod = watch('paymentMethod')

  const {
    cart,
    decrementItemQuantity,
    incrementItemQuantity,
    removeItemFromCart,
    checkoutCart,
  } = useCart()

  const navigate = useNavigate()

  function handleCreateNewCheckout(data: NewCheckoutFormData) {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkoutCart({ ...data, checkout: cart })

    navigate('/success')
  }

  const totalItemsPrice = cart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleCreateNewCheckout)}>
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
                {...register('cep')}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
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
                  pagar:
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <PaymentMethod
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </PaymentMethod>

                <PaymentMethod
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </PaymentMethod>

                <PaymentMethod
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
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
          {cart.length === 0 && <EmptyState />}
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

          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
