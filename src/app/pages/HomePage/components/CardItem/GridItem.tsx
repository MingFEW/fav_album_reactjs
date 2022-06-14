import React, { memo } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import { messages } from '../../messages'

// Types
import { Album } from 'types/AlbumsState'

// Utils
import { getAssetPath } from 'utils/getAssetPath'

// Components
import { Box } from 'app/components/Box'
import { Text } from 'app/components/Text'
import {
  HeartOutlineIcon,
  HeartSolidIcon,
  RemoveIcon,
} from 'app/components/Svg'

interface Props {
  data: Album
}

export const GridItem: React.FC<Props> = memo(
  props => {
    const { t } = useTranslation()

    const { data } = props
    const { image, title, singer } = data || {}

    return (
      <Wrapper>
        <ThumbnailWrapper>
          <img src={getAssetPath(image.url)} alt={image.alternativeText} />

          <FavoriteWrap>
            {/* <HeartOutlineIcon /> */}
            {/* <HeartSolidIcon /> */}
            <RemoveIcon />
          </FavoriteWrap>
        </ThumbnailWrapper>

        <Box className="p-5">
          <Text color="text1" bold>
            {title}
          </Text>
          <Text className="mt-2" color="text1">
            {singer}
          </Text>
          {/* No Delete button if it's the best */}
          <Text className="mt-2 del-item" color="red1">
            {t(messages.delete())}
          </Text>
        </Box>
      </Wrapper>
    )
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.data) !== JSON.stringify(nextProps.data),
)

export const Wrapper = styled.div`
  background: ${p => p.theme.card};
  box-shadow: 0px 1px 6px ${p => p.theme.shadow};

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
