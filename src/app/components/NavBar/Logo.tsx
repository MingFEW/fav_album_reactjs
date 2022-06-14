import * as React from 'react'
import styled from 'styled-components/macro'

import { media } from 'styles/media'

import { Logo as AppLogo } from '../Svg'

export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <AppLogo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 200px;
    margin-bottom: 5px;

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
