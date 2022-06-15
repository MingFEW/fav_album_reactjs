/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useTranslation } from 'react-i18next'

import { messages } from '../../messages'

import { Modal } from 'app/components/Modal'
import { Text } from 'app/components/Text'
import { Flex } from 'app/components/Box'
import { Button } from 'app/components/Button'
import { LoadingIndicator } from 'app/components/LoadingIndicator'

interface Props {
  isOpen: boolean
  isDeleting: boolean
  closeModal(): void
  onOK(): void
}

export const DeleteModal: React.FC<Props> = props => {
  const { t } = useTranslation()

  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
      <Text fontSize="18px" bold>
        {t(messages.deleteThisAlbum())}
      </Text>
      <Flex mt="24px">
        <Button mr="24px" variant="primary" onClick={props.onOK}>
          {props.isDeleting ? (
            <LoadingIndicator strokeColor="white" small />
          ) : (
            t(messages.ok())
          )}
        </Button>
        <Button variant="secondary" onClick={props.closeModal}>
          {t(messages.cancel())}
        </Button>
      </Flex>
    </Modal>
  )
}
