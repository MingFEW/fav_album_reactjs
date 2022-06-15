import React, { memo, useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import { messages } from '../../messages'

// Components
import { Button as ButtonBase } from 'app/components/Button'
import { Box, Flex } from 'app/components/Box'
import { SortOptions } from './SortOptions'
import { ViewModeBox } from './ViewModeBox'
import { OrderButton } from './OrderButton'
import { AddModal } from '../ActionModal/AddModal'

export const FilterBox: React.FC = memo(() => {
  const { t } = useTranslation()

  const [showAddModal, setShowAddModal] = useState<boolean>(false)

  const toggleAddModal = useCallback(() => {
    setShowAddModal(prev => !prev)
  }, [])

  return (
    <>
      <Wrapper>
        <AddButton variant="primary" onClick={toggleAddModal}>
          {t(messages.addNew())}
        </AddButton>
        <Flex className="flex-col md:flex-row" alignItems="center">
          <ViewModeBox />
          {/* Style for desktop */}
          <Box className="hidden md:flex md:items-center">
            <div className="w-40 lg:w-52 xl:w-64 md:block mr-3">
              <SortOptions />
            </div>
            <OrderButton />
          </Box>
        </Flex>
      </Wrapper>

      {/* Style for mobile */}
      <Box className="flex items-center md:hidden mb-6">
        <div className="flex-1 mr-3">
          <SortOptions />
        </div>
        <OrderButton />
      </Box>

      <AddModal isOpen={showAddModal} closeModal={toggleAddModal} />
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
  color: white !important;
`
