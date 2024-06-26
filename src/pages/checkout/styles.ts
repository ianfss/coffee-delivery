import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.baseCard};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const AddressContainer = styled(FormsContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme.colors.baseSubtitle};
    }

    p {
      ${mixins.fonts.textS};
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors.secondaryDark};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  border-bottom: 1px solid ${(props) => props.theme.colors.baseButton};

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${(props) => props.theme.colors.baseButton};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors.baseHover};
    }

    > svg {
      color: ${(props) => props.theme.colors.primary};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.baseText};
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.colors.baseCard};
  width: 100%;
  min-width: 448px;
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 24px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${mixins.fonts.buttonG};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryDark};
  }

  border-radius: 6px;
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
