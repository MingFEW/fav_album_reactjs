/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { GlobalStyle } from '../styles/global-styles'

import ToastListener from 'contexts/ToastsContext/Listener'
import { QueryParamsProvider } from 'contexts/QueryParamsContext'

import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './pages/NotFoundPage/Loadable'

export function App() {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <QueryParamsProvider>
        <Helmet
          titleTemplate="%s - Fav Music List"
          defaultTitle="Fav Music List"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="Fav Music List application" />
        </Helmet>

        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={HomePage}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
        <ToastListener />
      </QueryParamsProvider>
    </BrowserRouter>
  )
}
