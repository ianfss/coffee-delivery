import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
  position: relative;
  height: 544px;

  #heroBg {
    z-index: -10;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 94px 0;

  display: flex;
  gap: 56px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    text-wrap: balance;
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors.baseTitle}
  }

  h3 {
    text-wrap: balance;
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors.baseSubtitle}
  }
`

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      box-sizing: initial;
      padding: 8px;
      border-radius: 9999px;

      color: ${(props) => props.theme.colors.white};
    }

    span {
      text-wrap: nowrap;

      ${mixins.fonts.textM}
      color: ${(props) => props.theme.colors.baseText};
    }
  }
`
