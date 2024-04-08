import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const PaymentMethod = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  )
})
