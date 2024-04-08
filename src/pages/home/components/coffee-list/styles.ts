import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.main`
  max-width: 1120px;
  margin: 32px auto;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  > div {
    margin-top: 54px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
  }
`
