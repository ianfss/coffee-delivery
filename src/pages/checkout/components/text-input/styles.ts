import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.baseInput};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme.colors.secondaryDark};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme.colors.baseButton};
  }

  input {
    color: ${(props) => props.theme.colors.baseText};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.baseLabel};
    }
  }

  span {
    color: ${(props) => props.theme.colors.baseLabel};
    padding-right: 12px;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
