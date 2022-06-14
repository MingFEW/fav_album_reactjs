import React, { useCallback, memo, useState } from 'react'
import isEmpty from 'lodash/isEmpty'

import { PAGE_SIZE } from 'contants'

// Context
import { useViewMode } from 'contexts/ViewModeContext/hooks'
import { useQueryParams } from 'contexts/QueryParamsContext/hooks'

// State
import { useAlbums } from 'state/albums/hooks'

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

export const AlbumListView: React.FC = () => {
  const { params, setParams } = useQueryParams()
  const { viewMode } = useViewMode()
  const { isLoading, albums, albumsCount } = useAlbums(params)

  const [page, setPage] = useState<number>(1)

  const onPageChange = useCallback(
    (page: number, pageSize: number) => {
      setPage(page)
      setParams({
        ...params,
        _start: page * pageSize - params._limit,
      })
    },
    [params, setParams],
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
              <CardItem data={album} key={index} />
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
    </>
  )
}

const CardItemPlaceholder: React.FC = memo(() => {
  const { viewMode } = useViewMode()
  return viewMode === 'grid' ? <GridItemPlaceholder /> : <ListItemPlaceholder />
})

const CardItem: React.FC<{ data: Album }> = memo(({ data }) => {
  const { viewMode } = useViewMode()
  return viewMode === 'grid' ? (
    <GridItem data={data} />
  ) : (
    <ListItem data={data} />
  )
})
