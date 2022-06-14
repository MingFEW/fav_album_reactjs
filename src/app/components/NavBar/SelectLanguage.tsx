import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'

import { Button } from '../Button'
import { Text } from '../Text'

export const SelectLanguage: React.FC = memo(() => {
  const { i18n } = useTranslation()

  const onChangeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language)
    },
    [i18n],
  )

  return (
    <Wrapper>
      <LanguageButton
        selected={i18n.language === 'en'}
        onClick={() => onChangeLanguage('en')}
      >
        EN
      </LanguageButton>
      <Text className="mx-4" color="text2">
        /
      </Text>
      <LanguageButton
        selected={i18n.language === 'vi'}
        onClick={() => onChangeLanguage('vi')}
      >
        VI
      </LanguageButton>
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
