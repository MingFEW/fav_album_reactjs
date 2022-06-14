import React, { memo } from 'react'
import styled from 'styled-components/macro'

import { Box } from 'app/components/Box'
import { Text } from 'app/components/Text'
import {
  HeartOutlineIcon,
  HeartSolidIcon,
  RemoveIcon,
} from 'app/components/Svg'
import { useTranslation } from 'react-i18next'
import { messages } from '../messages'

export const CardItemGrid: React.FC = memo(() => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <ThumbnailWrapper>
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/4/7/c/947c4e9b9220c3d158fdf9ec40437e91.jpg"
          alt="aaa"
        />

        <FavoriteWrap>
          {/* <HeartOutlineIcon /> */}
          {/* <HeartSolidIcon /> */}
          <RemoveIcon />
        </FavoriteWrap>
      </ThumbnailWrapper>

      <Box className="p-5">
        <Text color="text1" bold>
          New Music for Monday
        </Text>
        <Text className="mt-2" color="text1">
          John Deep, Albi
        </Text>
        {/* No Delete button if it's the best */}
        <Text className="mt-2 del-item" color="red1">
          {t(messages.delete())}
        </Text>
      </Box>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);

  .del-item {
    cursor: pointer;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
  }
`

const ThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  transition: box-shadow 0.25s linear;
  &:hover {
    box-shadow: 1px 7px 15px rgb(0 0 0 / 30%);
  }
`
