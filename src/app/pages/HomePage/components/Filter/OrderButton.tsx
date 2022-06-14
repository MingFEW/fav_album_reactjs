import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'

import { messages } from '../../messages'

// Context
import { useQueryParams } from 'contexts/QueryParamsContext/hooks'

// Components
import { Button as ButtonBase } from 'app/components/Button'
import { SortAscIcon, SortDescIcon } from 'app/components/Svg'

export const OrderButton: React.FC = () => {
  const { t } = useTranslation()
  const { params, setParams } = useQueryParams()
  const isASC = params._order === 'ASC'

  const onOrderChange = useCallback(() => {
    setParams({
      ...params,
      _order: isASC ? 'DESC' : 'ASC',
    })
  }, [params, setParams, isASC])

  return (
    <>
      <Button
        data-tip={isASC ? t(messages.ascending()) : t(messages.descending())}
        data-for="tooltip"
        onClick={onOrderChange}
      >
        {isASC ? <SortAscIcon /> : <SortDescIcon />}
      </Button>
      <ReactTooltip id="tooltip" effect="solid" place="top" />
    </>
  )
}

const Button = styled(ButtonBase)`
  padding: 10px !important;

  svg path {
    stroke: ${p => p.theme.strokeColor};
  }
`
