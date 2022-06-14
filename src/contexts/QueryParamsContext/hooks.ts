import { useContext } from 'react'
import { QueryParamsContext, QueryParamsContextType } from './Provider'

export const useQueryParams = (): QueryParamsContextType => {
  const context = useContext(QueryParamsContext)
  if (context === undefined) {
    throw new Error('useQueryParams must be used within a QueryParamsProvider')
  }

  return context
}
