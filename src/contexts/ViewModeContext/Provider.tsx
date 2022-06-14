import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

export type ViewModeContextType = {
  viewMode: 'grid' | 'list'
  setViewMode: Dispatch<SetStateAction<'grid' | 'list'>>
}

export const ViewModeContext = createContext<ViewModeContextType>({
  viewMode: 'grid',
  setViewMode: () => {},
})

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  )
}
