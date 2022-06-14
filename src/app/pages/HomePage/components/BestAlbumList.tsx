import React from 'react'
import styled from 'styled-components/macro'

import { Flex } from 'app/components/Box'
import { Text } from 'app/components/Text'
import { CardItemGrid } from './CardItemGrid'
import { media } from 'styles/media'
import { useTranslation } from 'react-i18next'
import { messages } from '../messages'

export const BestAlbumList: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Flex mt="100px" mb="20px">
        <Title mr="12px">{t(messages.theBestOfAlbum())}</Title>
      </Flex>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }, (v, k: number) => (
          <CardItemGrid key={k} />
        ))}
      </div>
    </>
  )
}

const Title = styled(Text)<{ primary?: boolean }>`
  font-size: 24px;
  font-weight: 900;
  color: ${p => (p.primary ? p.theme.primary : p.theme.text)};

  ${media.md`
    font-size: 30px;
  `}

  ${media.lg`
    font-size: 40px;
  `}
`
