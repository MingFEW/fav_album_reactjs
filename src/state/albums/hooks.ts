/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer } from 'redux-injectors'
import { useTranslation } from 'react-i18next'

import AlbumApis from 'services/apis/albums'

import { useToast } from 'contexts/ToastsContext/hooks'

import { Params, RootState } from 'types'
import { AlbumsState } from 'types/AlbumsState'
import { fetchAlbums } from './actions'

// Redux
import { slice } from './reducer'
import { useQueryParams } from 'contexts/QueryParamsContext/hooks'
import { translations } from 'locales/translations'

export const useAlbumsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
}

export const useAlbums = (
  params: Params,
): {
  isLoading: boolean
  albums: any[]
  albumsCount: number
} => {
  const { isLoading, albums, error, albumsCount }: AlbumsState = useSelector<
    RootState,
    AlbumsState
  >(state => state.albums)
  const { toastError } = useToast()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbums(params))
  }, [dispatch, params])

  useEffect(() => {
    if (error) {
      toastError('Error', error?.message)
    }
  }, [error, toastError])

  return { isLoading, albums, albumsCount }
}

export const useDeleteAlbum = (): {
  isDeleting: boolean
  deleteAlbum: (id?: string, cb?: () => void) => void
} => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { params } = useQueryParams()
  const { toastSuccess } = useToast()

  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const deleteAlbum = useCallback(
    async (id?: string, cb?: () => void) => {
      setIsDeleting(true)

      await AlbumApis.deleteAlbum(id)
      dispatch(fetchAlbums(params))
      toastSuccess(
        t(translations.notification.notif),
        t(translations.notification.deleteAlbumSuccess),
      )

      setIsDeleting(false)
      cb && cb()
    },
    [dispatch, params, isDeleting],
  )

  return { isDeleting, deleteAlbum }
}
