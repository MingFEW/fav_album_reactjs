export type FormValues = {
  en: Field
  vi: Field
}

export type Field = {
  title: string
  singer: string
  description: string
}

export type CreateAlbumTypes = {
  title: string
  singer: string
  description: string
  locale: string
}
