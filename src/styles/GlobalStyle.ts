import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: ${(p) => p.theme['base-background']};
  }
`
