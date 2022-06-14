import React, { memo } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import { messages } from '../../messages'

import { useBestAlbums } from 'contexts/BestAlbumsContext/hooks'

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
import { FavoriteWrap, Wrapper } from './styled'
interface Props {
  data: Album
  isBestCard?: boolean
  onRemoveBestAlbum?: () => void
  onFavoriteToggle?: () => void
}

export const GridItem: React.FC<Props> = memo(
  props => {
    const { t } = useTranslation()
    const { bestAlbums } = useBestAlbums()

    const { data, isBestCard, onFavoriteToggle, onRemoveBestAlbum } = props
    const { id, image, title, singer } = data || {}
    const isFavorited = bestAlbums.findIndex(al => al.id === id) > -1

    return (
      <Wrapper>
        <ThumbnailWrapper>
          <img src={getAssetPath(image.url)} alt={image.alternativeText} />

          <FavoriteWrap
            onClick={() =>
              isBestCard
                ? onRemoveBestAlbum && onRemoveBestAlbum()
                : onFavoriteToggle && onFavoriteToggle()
            }
          >
            {isBestCard ? (
              <RemoveIcon />
            ) : (
              <>{isFavorited ? <HeartSolidIcon /> : <HeartOutlineIcon />}</>
            )}
          </FavoriteWrap>
        </ThumbnailWrapper>

        <Box className="p-5">
          <StyledTitle color="text1" bold>
            {title}
          </StyledTitle>
          <Text className="mt-2" color="text1">
            {singer}
          </Text>
          {/* No Delete button if it's the best */}
          {!isBestCard && (
            <Text className="mt-2 del-item" color="red1">
              {t(messages.delete())}
            </Text>
          )}
        </Box>
      </Wrapper>
    )
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data),
)

const ThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const StyledTitle = styled(Text)`
  min-height: 42px;
  max-height: 42px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
