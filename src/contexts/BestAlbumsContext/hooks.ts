import { useContext } from 'react'
import { BestAlbumsContext, BestAlbumsContextType } from './Provider'

export const useBestAlbums = (): BestAlbumsContextType => {
  const context = useContext(BestAlbumsContext)
  if (context === undefined) {
    throw new Error('useBestAlbums must be used within a BestAlbumsProvider')
  }

  return context
}
