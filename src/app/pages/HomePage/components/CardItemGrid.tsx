import React, { memo } from 'react'
import styled from 'styled-components/macro'

import { Box } from 'app/components/Box'
import { Text } from 'app/components/Text'
import { HeartOutlineIcon, HeartSolidIcon } from 'app/components/Svg'

export const CardItemGrid: React.FC = memo(() => {
  return (
    <Wrapper>
      <ThumbnailWrapper>
        <img
          src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-4-5af9c270adb750fdeb8f6a17fc9bfe54.jpg"
          alt=""
        />

        <FavoriteWrap>
          <HeartOutlineIcon />
          {/* <HeartSolidIcon /> */}
        </FavoriteWrap>
      </ThumbnailWrapper>

      <Box className="p-5">
        <Text color="text1" bold>
          New Music for Monday
        </Text>
        <Text className="mt-2" color="text1">
          John Deep, Albi
        </Text>
      </Box>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);

  &:hover img {
    transform: scale(1.1) translateZ(0);
  }
`

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s;
  }
`

const FavoriteWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale3d(1.03, 1.03, 1.03);
  }
`
