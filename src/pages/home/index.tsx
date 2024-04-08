import { useCart } from '../../hooks/useCart'
import { CoffeeList } from './components/coffee-list'
import { Hero } from './components/hero'

export function HomePage() {
  const { cart } = useCart()

  console.log(cart)
  return (
    <div>
      <Hero />
      <CoffeeList />
    </div>
  )
}
