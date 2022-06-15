import React, { useCallback } from 'react'
import Select from 'react-select'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import { useQueryParams } from 'contexts/QueryParamsContext/hooks'

import { messages } from '../../messages'

export const SortOptions: React.FC = () => {
  const { t } = useTranslation()
  const { params, setParams } = useQueryParams()

  const options = [
    { value: 'id', label: t(messages.sortById()) },
    { value: 'title', label: t(messages.sortByName()) },
    { value: 'updatedAt', label: t(messages.sortByDate()) },
  ]

  const onSelectChange = useCallback(
    (option: any) => {
      setParams({
        ...params,
        _sort: option.value,
      })
    },
    [params, setParams],
  )

  return (
    <div className="w-full">
      <StyledSelect
        value={options.find(op => op.value === params._sort)}
        className="sort-options"
        options={options}
        onChange={onSelectChange}
      />
    </div>
  )
}

const StyledSelect = styled(Select)`
  .css-319lph-ValueContainer {
    padding: 8px;
  }
  .css-1s2u09g-control {
    border-radius: 0px;
  }

  .css-1pahdxg-control {
    border-radius: 0px;
    box-shadow: 0 0 0 1px ${p => p.theme.primary};

    &:hover {
      border-color: ${p => p.theme.primary};
    }
  }
`
