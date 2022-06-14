import { useContext } from 'react'
import { ViewModeContext, ViewModeContextType } from './Provider'

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext)
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider')
  }

  return context
}
