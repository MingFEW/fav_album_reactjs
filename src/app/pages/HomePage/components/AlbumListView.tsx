import React, { useCallback, memo, useState } from 'react'
import isEmpty from 'lodash/isEmpty'

import { PAGE_SIZE } from 'contants'

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

export const AlbumListView: React.FC = () => {
  const { params, setParams } = useQueryParams()
  const { viewMode } = useViewMode()
  const { isLoading, albums, albumsCount } = useAlbums(params)
  const { isDeleting, deleteAlbum } = useDeleteAlbum()
  const { toggleBestAlbum } = useBestAlbums()

  const [page, setPage] = useState<number>(1)
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [albumSelected, setAlbumSelected] = useState<Album | null>(null)

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const onPageChange = useCallback(
    (page: number, pageSize: number) => {
      setPage(page)
      setParams({
        ...params,
        _start: page * pageSize - params._limit,
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
          ? Array.from({ length: PAGE_SIZE }, (_, k: number) => (
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

      {!isEmpty(albums) && (
        <Flex className="my-10" alignItems="center" justifyContent="center">
          <Pagination
            current={page}
            pageSize={PAGE_SIZE}
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
