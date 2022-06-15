import React, { memo } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { messages } from '../../messages'

import { Album } from 'types/AlbumsState'

import { getAssetPath } from 'utils/getAssetPath'

import { useBestAlbums } from 'contexts/BestAlbumsContext/hooks'

// Components
import { HeartOutlineIcon, HeartSolidIcon } from 'app/components/Svg'
import { Box } from 'app/components/Box'
import { Text } from 'app/components/Text'
import { FavoriteWrap, Wrapper } from './styled'

interface Props {
  data: Album
  onFavoriteToggle: () => void
  onDeleteAlbum?: () => void
}

export const ListItem: React.FC<Props> = memo(
  ({ data, onFavoriteToggle, onDeleteAlbum }) => {
    const { t } = useTranslation()
    const { bestAlbums } = useBestAlbums()
    const { id, image, title, singer, description } = data || {}
    const isFavorited = bestAlbums.findIndex(al => al.id === id) > -1

    return (
      <Wrapper>
        <div className="p-4 flex flex-col sm:flex-row gap-6 items-start justify-start">
          <ThumbnailWrapper>
            <img src={getAssetPath(image.url)} alt={image.alternativeText} />
            <FavoriteWrap onClick={onFavoriteToggle}>
              {isFavorited ? <HeartSolidIcon /> : <HeartOutlineIcon />}
            </FavoriteWrap>
          </ThumbnailWrapper>
          <Box className="content">
            <Text color="text1" bold>
              {title}
            </Text>
            <Text className="mt-2" color="text1">
              {singer}
            </Text>
            <Text className="mt-2" color="text1">
              {description}
            </Text>
            <Text
              className="mt-2 del-item"
              color="red1"
              onClick={onDeleteAlbum}
            >
              {t(messages.delete())}
            </Text>
          </Box>
        </div>
      </Wrapper>
    )
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data),
)

export const ThumbnailWrapper = styled.div`
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
