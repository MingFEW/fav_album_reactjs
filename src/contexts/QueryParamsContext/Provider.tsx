import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

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
    _order: 'ASC',
  },
  setParams: () => {},
})

export const QueryParamsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [params, setParams] = useState<Params>({
    _limit: PAGE_SIZE,
    _start: 0,
    _sort: 'id',
    _order: 'ASC',
  })

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
