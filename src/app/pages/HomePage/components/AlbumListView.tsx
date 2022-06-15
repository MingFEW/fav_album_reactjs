import React, { useCallback, memo, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from 'react-i18next'

import { messages } from '../messages'

// Context
import { useViewMode } from 'contexts/ViewModeContext/hooks'
import { useQueryParams } from 'contexts/QueryParamsContext/hooks'
import { useBestAlbums } from 'contexts/BestAlbumsContext/hooks'

// State
import { useAlbums, useDeleteAlbum } from 'state/albums/hooks'

// Types
import { Album } from 'types/AlbumsState'

// Components
import { Flex } from 'app/components/Box'
import { Pagination } from 'app/components/Pagination'

import { GridItem } from './CardItem/GridItem'
import { ListItem } from './CardItem/ListItem'
import { GridItemPlaceholder } from './CardItem/GridItemPlaceholder'
import { ListItemPlaceholder } from './CardItem/ListItemPlaceholder'
import { FilterBox } from './Filter/FilterBox'
import { DeleteModal } from './ActionModal/DeleteModal'
import { Text } from 'app/components/Text'

export const AlbumListView: React.FC = () => {
  const { t } = useTranslation()
  const { params, setParams } = useQueryParams()
  const { viewMode } = useViewMode()
  const { isLoading, albums, albumsCount } = useAlbums(params)
  const { isDeleting, deleteAlbum } = useDeleteAlbum()
  const { toggleBestAlbum } = useBestAlbums()

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [albumSelected, setAlbumSelected] = useState<Album | null>(null)

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const page = (params._start + params._limit) / params._limit
  const onPageChange = useCallback(
    (page: number) => {
      setParams({
        ...params,
        _start: page * params._limit - params._limit,
      })
      scrollToTop()
    },
    [params, setParams, scrollToTop],
  )

  const toggleDeleteModal = useCallback(() => {
    setShowDeleteModal(prev => !prev)
  }, [])

  const onDeleteAlbum = useCallback(
    (album: Album) => {
      setAlbumSelected(album)
      toggleDeleteModal()
    },
    [toggleDeleteModal],
  )

  return (
    <>
      <FilterBox />
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'flex flex-col gap-6'
        }
      >
        {isLoading
          ? Array.from({ length: params._limit }, (_, k: number) => (
              <CardItemPlaceholder key={k} />
            ))
          : albums.map((album: Album, index: number) => (
              <CardItem
                data={album}
                key={index}
                onFavoriteToggle={() => toggleBestAlbum(album)}
                onDeleteAlbum={() => onDeleteAlbum(album)}
              />
            ))}
      </div>

      {!isLoading && isEmpty(albums) && (
        <Flex
          py="50px"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="grey" fontSize="24px" fontStyle="italic">
            {t(messages.emptyList())}
          </Text>
        </Flex>
      )}

      {!isEmpty(albums) && (
        <Flex className="my-10" alignItems="center" justifyContent="center">
          <Pagination
            current={page}
            pageSize={params._limit}
            total={albumsCount}
            onChange={onPageChange}
          />
        </Flex>
      )}

      {/* All modal here*/}
      <DeleteModal
        isOpen={showDeleteModal}
        isDeleting={isDeleting}
        closeModal={toggleDeleteModal}
        onOK={() => deleteAlbum(albumSelected?.id, toggleDeleteModal)}
      />
    </>
  )
}

const CardItemPlaceholder: React.FC = memo(() => {
  const { viewMode } = useViewMode()
  return viewMode === 'grid' ? <GridItemPlaceholder /> : <ListItemPlaceholder />
})

const CardItem: React.FC<{
  data: Album
  onFavoriteToggle: () => void
  onDeleteAlbum: () => void
}> = memo(({ data, onFavoriteToggle, onDeleteAlbum }) => {
  const { viewMode } = useViewMode()
  return viewMode === 'grid' ? (
    <GridItem
      data={data}
      onFavoriteToggle={onFavoriteToggle}
      onDeleteAlbum={onDeleteAlbum}
    />
  ) : (
    <ListItem
      data={data}
      onFavoriteToggle={onFavoriteToggle}
      onDeleteAlbum={onDeleteAlbum}
    />
  )
})
