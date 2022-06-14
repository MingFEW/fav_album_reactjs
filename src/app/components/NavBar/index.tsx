import React from 'react'
import styled from 'styled-components/macro'

import { StyleConstants } from 'styles/StyleConstants'
import { media } from 'styles/media'

import { Logo } from './Logo'
import { Nav } from './Nav'
import { PageWrapper } from '../PageWrapper'

export const NavBar: React.FC = () => {
  return (
    <Wrapper className="nav-bar">
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;
  box-shadow: 0px 0px 0px 1px ${p => p.theme.borderLight};

  ${PageWrapper} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    ${media.sm`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
  }
`
