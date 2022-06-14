import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer } from 'redux-injectors'

import { useToast } from 'contexts/ToastsContext/hooks'

import { Params, RootState } from 'types'
import { AlbumsState } from 'types/AlbumsState'
import { fetchAlbums } from './actions'

// Redux
import { slice } from './reducer'

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
