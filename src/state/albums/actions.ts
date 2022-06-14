import { Dispatch } from '@reduxjs/toolkit'
import isEmpty from 'lodash/isEmpty'

import AlbumApis from 'services/apis/albums'
import { Params } from 'types'
import {
  loadAlbums,
  loadAlbumsError,
  albumsLoaded,
  albumsCountLoaded,
} from './reducer'

export const fetchAlbums = (params: Params) => async (dispatch: Dispatch) => {
  try {
    dispatch(loadAlbums())
    setTimeout(async () => {
      const data = await Promise.all([
        AlbumApis.getAlbumsCount(),
        AlbumApis.getAlbumList(params),
      ])

      if (!isEmpty(data)) {
        dispatch(albumsCountLoaded(data[0]))
        dispatch(albumsLoaded(data[1]))
      }
    }, 200)
  } catch (error) {
    dispatch(loadAlbumsError(error))
  }
}
