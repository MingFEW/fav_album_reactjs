import { createGlobalStyle } from 'styled-components'
import { StyleConstants } from './StyleConstants'
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
`
