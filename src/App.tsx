import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GithubContextProvider } from './context/GithubContext'
import { Router } from './router'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubContextProvider>
          <Router />
        </GithubContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
