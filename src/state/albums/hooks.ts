/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer } from 'redux-injectors'
import { useTranslation } from 'react-i18next'
import AlbumApis from 'services/apis/albums'
import { useToast } from 'contexts/ToastsContext/hooks'
import { FormValues, Params, RootState } from 'types'
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

export const useCreateAlbum = (): {
  isCreating: boolean
  createAlbum: (formValues: FormValues, files: any[], cb: () => void) => void
} => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { params } = useQueryParams()
  const { toastSuccess, toastError } = useToast()

  const [isCreating, setIsCreating] = useState<boolean>(false)

  const createAlbum = useCallback(
    async (formValues: FormValues, files: any[], cb: () => void) => {
      setIsCreating(true)

      try {
        const postResult = await AlbumApis.createAlbum(formValues, 'en', {})

        const formData = new FormData()
        formData.append('files', files[0])
        formData.append('ref', 'album')
        formData.append('field', 'image')
        formData.append('refId', postResult.id)

        const imageResult = await AlbumApis.uploadImage(formData)

        await AlbumApis.createAlbum(formValues, 'vi', {
          localizations: [postResult.id],
          image: imageResult[0]._id,
        })

        dispatch(fetchAlbums(params))
        toastSuccess(
          t(translations.notification.notif),
          t(translations.notification.addNewAlbum),
        )

        cb && cb()
      } catch (error: any) {
        toastError(t(translations.notification.notif), error?.message)
      } finally {
        setIsCreating(false)
      }
    },
    [dispatch, params, isCreating],
  )

  return { isCreating, createAlbum }
}
