export interface AlbumsState {
  isLoading: boolean
  albums: any
  albumsCount: number
  error: any
}

export interface Album {
  createdAt: string
  description: string
  id: string
  image: AlbumImage
  locale: string
  localizations: any
  published_at: string
  singer: string
  title: string
  updatedAt: string
}

export interface AlbumImage {
  alternativeText: string
  caption: string
  createdAt: string
  ext: string
  formats: {
    thumbnail: {
      ext: string
      hash: string
      height: number
      mime: string
      name: string
      path?: string
      size: number
      url: string
      width: number
    }
  }
  hash: string
  height: number
  id: string
  mime: string
  name: string
  provider: string
  related: string[]
  updatedAt: string
  size: number
  url: string
  width: number
  __v: number
  _id: string
}

export interface Localizations {
  id: string
  locale: string
  published_at: string
  _id: string
}
