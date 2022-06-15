/* eslint-disable import/no-anonymous-default-export */
import { Request } from '../request'
import { CreateAlbumTypes, FormValues, Params } from 'types'
import { Album } from 'types/AlbumsState'

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

function getAlbumsCount(params: Params) {
  return Request.get('/albums/count', {
    params: {
      _locale: params._locale,
    },
  })
}

function deleteAlbum(id?: string) {
  return Request.delete(`/albums/${id}`)
}

function createAlbum(formValues: FormValues, locale: string, opts?: any) {
  const data = {
    title: formValues[locale].title,
    singer: formValues[locale].singer,
    description: formValues[locale].description,
    locale,
    ...opts,
  }
  return Request.post<CreateAlbumTypes, Album>('/albums', data)
}

function updateAlbum(data: CreateAlbumTypes) {
  return Request.put<CreateAlbumTypes, Album>('/albums', data)
}

function uploadImage(data: any) {
  return Request.post<any, Album['image']>('/upload', data)
}

export default {
  getAlbumList,
  getAlbumsCount,
  deleteAlbum,
  createAlbum,
  updateAlbum,
  uploadImage,
}
