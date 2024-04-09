import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  text-align: center;
  border-radius: 6px;
  padding: 16px;

  ${mixins.fonts.textM};
  color: ${(props) => props.theme.colors.baseText};
  background: ${(props) => props.theme.colors.baseInput};
  border: 1px solid ${(props) => props.theme.colors.baseButton};

  svg {
    border-radius: 9999px;
    padding: 12px;
    box-sizing: initial;

    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primary};
  }
`
