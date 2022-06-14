import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import { messages } from '../../messages'

import { useViewMode } from 'contexts/ViewModeContext/hooks'

// Components
import { Button } from 'app/components/Button'
import { Flex } from 'app/components/Box'
import { Text } from 'app/components/Text'
import { GridIcon, ListIcon } from 'app/components/Svg'

export const ViewModeBox: React.FC = memo(() => {
  const { t } = useTranslation()
  const { viewMode, setViewMode } = useViewMode()
  const isGridMode = viewMode === 'grid'

  return (
    <Flex alignItems="center">
      <Text className="hidden md:block mr-5" color="text2">
        {t(messages.viewMode())}
      </Text>

      <Flex className="md:mr-10" alignItems="center">
        <ButtonMode
          data-tip={t(messages.grid())}
          data-for="gridTooltip"
          active={isGridMode}
          onClick={() => setViewMode('grid')}
        >
          <GridIcon />
        </ButtonMode>
        <ButtonMode
          data-tip={t(messages.list())}
          data-for="listTooltip"
          active={!isGridMode}
          onClick={() => setViewMode('list')}
        >
          <ListIcon />
        </ButtonMode>

        <ReactTooltip id="gridTooltip" effect="solid" place="top" />
        <ReactTooltip id="listTooltip" effect="solid" place="top" />
      </Flex>
    </Flex>
  )
})

const ButtonMode = styled(Button)<{ active?: boolean }>`
  border-radius: 0px;
  padding: 10px !important;
  background-color: ${({ active, theme }) =>
    active ? theme.grey1 : 'transparent'};

  svg path {
    stroke: ${p => !p.active && p.theme.strokeColor};
  }
`
