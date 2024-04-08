import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { CheckoutPage } from './pages/checkout'
import { HomePage } from './pages/home'
import { SuccessPage } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
