import React, { memo } from 'react'
import styled from 'styled-components/macro'
import { Button } from '../Button'
import { Text } from '../Text'

export const SelectLanguage: React.FC = memo(() => {
  return (
    <Wrapper>
      <LanguageButton selected>EN</LanguageButton>
      <Text className="mx-4">/</Text>
      <LanguageButton>VI</LanguageButton>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const LanguageButton = styled(Button)<{ selected?: boolean }>`
  padding: 0px;
  font-weight: ${({ selected }) => (selected ? '700' : '400')} !important;
`
