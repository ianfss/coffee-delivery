import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  width: 100%;
  padding: 2rem 0;

  background: ${(props) => props.theme.colors.background};
`

export const Content = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  border: none;

  ${mixins.fonts.textS}
`

export const ButtonPrimary = styled(ButtonBase)`
  cursor: initial;

  color: ${(props) => props.theme.colors.primaryDark};
  background: ${(props) => props.theme.colors.primaryLight};

  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const ButtonSecondary = styled(ButtonBase)`
  position: relative;

  color: ${(props) => props.theme.colors.secondaryDark};
  background: ${(props) => props.theme.colors.secondaryLight};

  span {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);

    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mixins.fonts.textXS};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondaryDark};
  }
`
