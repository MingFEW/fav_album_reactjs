import React, { useCallback } from 'react'
import styled from 'styled-components/macro'

// Context
import { useQueryParams } from 'contexts/QueryParamsContext/hooks'

// Components
import { Button as ButtonBase } from 'app/components/Button'
import { SortAscIcon, SortDescIcon } from 'app/components/Svg'

export const OrderButton: React.FC = () => {
  const { params, setParams } = useQueryParams()

  const onOrderChange = useCallback(() => {
    setParams({
      ...params,
      _order: params._order === 'ASC' ? 'DESC' : 'ASC',
    })
  }, [params, setParams])

  return (
    <Button onClick={onOrderChange}>
      {params._order === 'ASC' ? <SortAscIcon /> : <SortDescIcon />}
    </Button>
  )
}

const Button = styled(ButtonBase)`
  padding: 10px !important;

  svg path {
    stroke: ${p => p.theme.strokeColor};
  }
`
