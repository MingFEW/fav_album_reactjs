import React, { memo } from 'react'

// Components
import { SelectLanguage } from './SelectLanguage'
import { ThemeSwitch } from './ThemeSwitch'
import { Flex } from '../Box'

export const Nav: React.FC = memo(() => {
  return (
    <Flex alignItems="center">
      <div className="mr-8">
        <SelectLanguage />
      </div>

      <ThemeSwitch />
    </Flex>
  )
})
