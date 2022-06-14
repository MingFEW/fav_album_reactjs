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

  .modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    padding: 40px;
    background-color: ${p => p.theme.card};
    border: none;
    max-width: 640px;
    margin: auto;
    height: fit-content;
    outline: none;
    z-index: 4;
  }

  .close-modal {
    position: absolute;
    top: -60px;
    right: -60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50px;
    height: 50px;
    background: ${p => p.theme.black};
    color: ${p => p.theme.grey1};
    cursor: pointer;
    user-select: none;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${p => p.theme.overlay};
    z-index: 3;
  }
`
