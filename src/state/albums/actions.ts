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

    const data = await Promise.all([
      AlbumApis.getAlbumsCount(params),
      AlbumApis.getAlbumList(params),
    ])

    if (!isEmpty(data)) {
      dispatch(albumsCountLoaded(data[0]))
      dispatch(albumsLoaded(data[1]))
    }
  } catch (error) {
    dispatch(loadAlbumsError(error))
  }
}
