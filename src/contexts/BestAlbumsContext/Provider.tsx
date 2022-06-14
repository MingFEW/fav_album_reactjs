/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState, useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from 'react-i18next'

import { Album } from 'types/AlbumsState'
import { BEST_ALBUM_LOCAL_KEY } from 'contants'
import { useToast } from 'contexts/ToastsContext/hooks'
import { translations } from 'locales/translations'

export type BestAlbumsContextType = {
  bestAlbums: Album[]
  toggleBestAlbum: (album: Album) => void
}

export const BestAlbumsContext = createContext<BestAlbumsContextType>({
  bestAlbums: [],
  toggleBestAlbum: () => {},
})

export const BestAlbumsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useTranslation()
  const { toastSuccess } = useToast()

  const [bestAlbums, setBestAlbums] = useState<Album[]>([])

  useEffect(() => {
    const list = getBestAlbums()
    setBestAlbums(list)
  }, [])

  const getBestAlbums = useCallback((): Album[] => {
    const list = localStorage.getItem(BEST_ALBUM_LOCAL_KEY)
    return !isEmpty(list) ? JSON.parse(list as string) : []
  }, [])

  const toggleBestAlbum = useCallback(
    (album: Album) => {
      const iExist = bestAlbums.findIndex(al => al.id === album.id)
      if (iExist > -1) {
        bestAlbums.splice(iExist, 1)
        toastSuccess(
          t(translations.notification.notif),
          t(translations.notification.removedFromBestAlbum),
        )
      } else {
        bestAlbums.unshift(album)
        toastSuccess(
          t(translations.notification.notif),
          t(translations.notification.addedToBestAlbum),
        )
      }

      setBestAlbums(bestAlbums)
      localStorage.setItem(BEST_ALBUM_LOCAL_KEY, JSON.stringify(bestAlbums))
    },
    [bestAlbums, toastSuccess],
  )

  return (
    <BestAlbumsContext.Provider
      value={{
        bestAlbums,
        toggleBestAlbum,
      }}
    >
      {children}
    </BestAlbumsContext.Provider>
  )
}
