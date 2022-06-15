/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useLocation } from 'react-router-dom'

import { PAGE_SIZE } from 'contants'
import { Params } from 'types'

export type QueryParamsContextType = {
  params: Params
  setParams: (params: Params) => void
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
  const history = useHistory()
  const { search, hash } = useLocation()
  const { i18n } = useTranslation()
  const urlParams = new URLSearchParams(search)

  const [params, _setParams] = useState<Params>({
    _limit: PAGE_SIZE,
    _start: Number(urlParams.get('_page') || 1) * PAGE_SIZE - PAGE_SIZE || 0,
    _sort: (urlParams.get('_sort') as Params['_sort']) || 'id',
    _order: (urlParams.get('_order') as Params['_order']) || 'DESC',
    _locale: 'en',
  })

  const setParams = useCallback((params: Params) => {
    history.push({
      hash,
      search: `_page=${(params._start + params._limit) / params._limit}&_sort=${
        params._sort
      }&_order=${params._order}`,
    })
    _setParams(params)
  }, [])

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
