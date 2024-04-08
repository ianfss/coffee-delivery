import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;

  display: flex;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;

    &:disabled {
      cursor: not-allowed;

      color: ${(props) => props.theme.colors.baseLabel};
    }

    &:not(:disabled) {
      color: ${(props) => props.theme.colors.primary};

      & :hover {
        color: ${(props) => props.theme.colors.primaryDark};
      }
    }
  }

  button span {
    padding-top: 2px;
    color: ${(props) => props.theme.colors.baseTitle};
  }
`
