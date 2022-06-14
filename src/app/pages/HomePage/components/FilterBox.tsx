import React, { memo } from 'react'
import styled from 'styled-components/macro'

import { Button as ButtonBase } from 'app/components/Button'
import { Box, Flex } from 'app/components/Box'
import { Text } from 'app/components/Text'
import { GridIcon, ListIcon, SortAscIcon } from 'app/components/Svg'
import { SortOptions } from './SortOptions'

export const FilterBox: React.FC = memo(() => {
  return (
    <>
      <Wrapper>
        <AddButton variant="primary">+ ADD ALBUM</AddButton>

        <Flex className="flex-col md:flex-row" alignItems="center">
          <Text className="hidden md:block mr-5">View mode</Text>

          <Flex className="md:mr-10" alignItems="center">
            <ButtonMode active>
              <GridIcon />
            </ButtonMode>
            <ButtonMode>
              <ListIcon />
            </ButtonMode>
          </Flex>

          {/* Style for desktop */}
          <Box className="hidden md:flex md:items-center">
            <div className="w-40 lg:w-52 xl:w-64 md:block mr-3">
              <SortOptions />
            </div>
            <SortButton>
              <SortAscIcon />
            </SortButton>
          </Box>
        </Flex>
      </Wrapper>

      {/* Style for mobile */}
      <Box className="flex items-center md:hidden mb-6">
        <div className="flex-1 mr-3">
          <SortOptions />
        </div>
        <SortButton>
          <SortAscIcon />
        </SortButton>
      </Box>
    </>
  )
})

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
`

const AddButton = styled(ButtonBase)`
  color: ${p => p.theme.text2} !important;
`

const SortButton = styled(ButtonBase)`
  padding: 10px !important;

  svg path {
    stroke: ${p => p.theme.strokeColor};
  }
`

const ButtonMode = styled(ButtonBase)<{ active?: boolean }>`
  border-radius: 0px;
  padding: 10px !important;
  background-color: ${({ active, theme }) =>
    active ? theme.grey1 : 'transparent'};

  svg path {
    stroke: ${p => !p.active && p.theme.strokeColor};
  }
`
