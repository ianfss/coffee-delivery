import { produce } from 'immer'
import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/home/components/card'

interface Item extends Coffee {
  quantity: number
}

interface CartContextType {
  cart: Item[]
  numberOfItemsOnCart: number
  totalPriceOfItems: number
  addItemToCart: (item: Item) => void
  changeCartItemQuantity: (
    itemId: string,
    type: 'increment' | 'decrement',
  ) => void
  removeCartItem: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([])

  const numberOfItemsOnCart = cart.length

  const totalPriceOfItems = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0,
  )

  function addItemToCart(item: Item) {
    const itemAlreadyExists = cart.findIndex(
      (cartItem) => cartItem.id === item.id,
    )

    const newCart = produce(cart, (draft) => {
      if (itemAlreadyExists < 0) {
        draft.push(item)
      } else {
        draft[itemAlreadyExists].quantity += item.quantity
      }
    })

    setCart(newCart)
  }

  function changeCartItemQuantity(
    itemId: string,
    type: 'increment' | 'decrement',
  ) {
    const newCart = produce(cart, (draft) => {
      const itemAlreadyExists = cart.findIndex(
        (cartItem) => cartItem.id === itemId,
      )

      if (itemAlreadyExists >= 0) {
        const item = draft[itemAlreadyExists]

        draft[itemAlreadyExists].quantity =
          type === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCart(newCart)
  }

  function removeCartItem(itemId: string) {
    const newCart = produce(cart, (draft) => {
      const itemAlreadyExists = cart.findIndex(
        (cartItem) => cartItem.id === itemId,
      )

      if (itemAlreadyExists >= 0) {
        draft.splice(itemAlreadyExists, 1)
      }
    })

    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        numberOfItemsOnCart,
        totalPriceOfItems,
        addItemToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
