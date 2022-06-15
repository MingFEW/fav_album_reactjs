/* eslint-disable import/no-anonymous-default-export */
import { Request } from '../request'
import { Params } from 'types'

function getAlbumList(params: Params) {
  const newParams = {
    ...params,
    _sort: `${params._sort}:${params._order}`,
    _order: undefined,
  }

  return Request.get(`/albums`, {
    params: { ...newParams },
  })
}

function getAlbumsCount() {
  return Request.get('/albums/count')
}

function deleteAlbum(id?: string) {
  return Request.delete(`/albums/${id}`)
}

export default {
  getAlbumList,
  getAlbumsCount,
  deleteAlbum,
}
