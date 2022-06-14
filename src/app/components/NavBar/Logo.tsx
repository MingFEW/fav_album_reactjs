import * as React from 'react'
import styled from 'styled-components/macro'

import { media } from 'styles/media'

import { Logo as AppLogo } from '../Svg'

export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <AppLogo />
      <div className="bar"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .bar {
    position: absolute;
    height: 10px;
    left: 0;
    right: 0px;
    bottom: 4px;
    background-image: ${p => p.theme.gradient};
    z-index: 0;
  }
  svg {
    width: 200px;
    margin-bottom: 5px;
    position: relative;
    z-index: 1;
    .my-fav {
      fill: ${p => p.theme.grey};
    }
  }

  ${media.sm`
      margin-bottom: 0px;
  `}

  ${media.md`
    svg {
      width: 300px;
    }
  `}
`
