import React from 'react'
import Select from 'react-select'
import styled from 'styled-components/macro'

const options = [
  { value: '1', label: 'Sort by Id' },
  { value: '2', label: 'Sort by Name' },
  { value: '3', label: 'Sort by Added Date' },
]

export const SortOptions: React.FC = () => {
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
