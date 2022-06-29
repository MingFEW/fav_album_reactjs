import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { Text } from 'app/components/Text'
import { StyleConstants } from 'styles/StyleConstants'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <Text>Page not found.</Text>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  color: ${p => p.theme.text};
`

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`
