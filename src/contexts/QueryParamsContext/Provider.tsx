/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { PAGE_SIZE } from 'contants'
import { Params } from 'types'

export type QueryParamsContextType = {
  params: Params
  setParams: Dispatch<SetStateAction<Params>>
}

export const QueryParamsContext = createContext<QueryParamsContextType>({
  params: {
    _limit: PAGE_SIZE,
    _start: 0,
    _sort: 'id',
    _order: 'DESC',
    _locale: 'en',
  },
  setParams: () => {},
})

export const QueryParamsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation()
  const [params, setParams] = useState<Params>({
    _limit: PAGE_SIZE,
    _start: 0,
    _sort: 'id',
    _order: 'DESC',
    _locale: 'en',
  })

  useEffect(() => {
    setParams({
      ...params,
      _locale: i18n.resolvedLanguage,
    })
  }, [i18n.resolvedLanguage])

  return (
    <QueryParamsContext.Provider
      value={{
        params,
        setParams,
      }}
    >
      {children}
    </QueryParamsContext.Provider>
  )
}
