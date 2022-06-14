import React from 'react'
import Select from 'react-select'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { messages } from '../messages'

export const SortOptions: React.FC = () => {
  const { t } = useTranslation()
  const options = [
    { value: '1', label: t(messages.sortById()) },
    { value: '2', label: t(messages.sortByName()) },
    { value: '3', label: t(messages.sortByDate()) },
  ]

  return (
    <div className="w-full">
      <StyledSelect className="sort-options" options={options} />
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
