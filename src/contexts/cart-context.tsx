import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee } from '../pages/home/components/card'
import {
  addItemToCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

interface Item extends Coffee {
  quantity: number
}

interface CartContextType {
  cart: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [cart, setCart] = useState<Item[]>([])
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [] },
    (state) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return state
    },
  )

  const { cart } = cartState

  function addItemToCart(item: Item) {
    dispatch(addItemToCartAction(item))
  }

  function removeItemFromCart(itemId: Item['id']) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        decrementItemQuantity,
        incrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
