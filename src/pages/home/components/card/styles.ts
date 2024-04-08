import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme.colors.baseCard};

  img {
    margin: -20px 0 12px;
    max-width: 120px;
    max-height: 120px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 16px;

  span {
    padding: 4px 8px;
    text-transform: uppercase;

    ${mixins.fonts.tag}
    background: ${(props) => props.theme.colors.secondaryLight};
    color: ${(props) => props.theme.colors.secondaryDark};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 8px;
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors.baseLabel};
  }
`

export const Footer = styled.div`
  margin-top: 32px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;
`

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  border: none;
`

export const Button = styled(ButtonBase)`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primaryDark};

  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`

export const Price = styled.div`
  text-align: left;
  flex: 1;

  ${mixins.fonts.titleM}
  color: ${(props) => props.theme.colors.baseText};

  span {
    ${mixins.fonts.textS}
  }
`
