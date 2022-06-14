import React from 'react'
import styled from 'styled-components'
import { HeartOutlineIcon, HeartSolidIcon } from 'app/components/Svg'
import { Box } from 'app/components/Box'
import { Text } from 'app/components/Text'
import { useTranslation } from 'react-i18next'
import { messages } from '../messages'

export const CardItemList: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <div className="p-4 flex flex-row gap-6 items-start justify-start">
        <ThumbnailWrapper>
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/4/7/c/947c4e9b9220c3d158fdf9ec40437e91.jpg"
            alt="aaa"
          />

          <FavoriteWrap>
            <HeartOutlineIcon />
            {/* <HeartSolidIcon /> */}
          </FavoriteWrap>
        </ThumbnailWrapper>
        <Box className="content">
          <Text color="text1" bold>
            New Music for Monday
          </Text>
          <Text className="mt-2" color="text1">
            John Deep, Albi
          </Text>
          <Text className="mt-2" color="text1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
          {/* No Delete button if it's the best */}
          <Text className="mt-2 del-item" color="red1">
            {t(messages.delete())}
          </Text>
        </Box>
      </div>
    </Wrapper>
  )
}

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
  width: 140px;
  flex: 0 0 140px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

const FavoriteWrap = styled.div`
  width: 36px;
  height: 36px;
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
