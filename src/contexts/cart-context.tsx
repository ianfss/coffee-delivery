import { produce } from 'immer'
import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/home/components/card'

interface Item extends Coffee {
  quantity: number
}

interface CartContextType {
  cart: Item[]
  numberOfItemsOnCart: number
  addItemToCart: (item: Item) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([])

  const numberOfItemsOnCart = cart.length

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

  return (
    <CartContext.Provider value={{ cart, numberOfItemsOnCart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
