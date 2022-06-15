/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from 'react-i18next'

import { INITIAL_FORM_VALUES } from 'contants'

import { messages } from '../../messages'

import { FormValues } from 'types'

import { useCreateAlbum } from 'state/albums/hooks'

import { validateFormValues } from 'utils/validateFormValues'

import { Modal } from 'app/components/Modal'
import { Text } from 'app/components/Text'
import { Box, Flex } from 'app/components/Box'
import { Button } from 'app/components/Button'
import { UploadFile } from 'app/components/UploadFile'
import { LoadingIndicator } from 'app/components/LoadingIndicator'
interface Props {
  isOpen: boolean
  closeModal(): void
}

export const AddModal: React.FC<Props> = props => {
  const { t } = useTranslation()
  const { isCreating, createAlbum } = useCreateAlbum()

  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES)
  const [uploadFiles, setUploadFiles] = useState<any[]>([])
  const [locale, setLocale] = useState<'en' | 'vi'>('en')

  const isDisableSubmit =
    isEmpty(uploadFiles) || !validateFormValues(formValues)

  const _setFormValues = useCallback(
    (field: string, value: string) => {
      setFormValues({
        ...formValues,
        [locale]: {
          ...formValues[locale],
          [field]: value,
        },
      })
    },
    [formValues, setFormValues, locale],
  )

  const onSubmit = useCallback(() => {
    createAlbum(formValues, uploadFiles, props.closeModal)
  }, [formValues, locale, uploadFiles])

  return (
    <Modal
      isOpen={props.isOpen}
      closeModal={() => !isCreating && props.closeModal()}
    >
      <Box>
        <Text mb="24px" fontSize="32px" fontWeight="900">
          {t(messages.addNewAlbumTitle())}
        </Text>

        <Box mb="24px">
          <UploadFile
            multiple={false}
            accept=".jpg, .png, .jpeg"
            onChange={setUploadFiles}
          />
        </Box>

        <Flex mb="24px">
          <LocaleButton
            active={locale === 'en'}
            onClick={() => setLocale('en')}
          >
            {t(messages.english())}
          </LocaleButton>
          <Box className="mx-3">|</Box>
          <LocaleButton
            active={locale === 'vi'}
            onClick={() => setLocale('vi')}
          >
            {t(messages.vietnamese())}
          </LocaleButton>
        </Flex>

        <Box mb="48px">
          <Input
            value={formValues[locale].title}
            placeholder={t(messages.title())}
            onChange={e => _setFormValues('title', e.target.value)}
          />
          <Input
            value={formValues[locale].singer}
            placeholder={t(messages.singer())}
            onChange={e => _setFormValues('singer', e.target.value)}
          />
          <Textarea
            value={formValues[locale].description}
            placeholder={t(messages.description())}
            onChange={e => _setFormValues('description', e.target.value)}
          />
        </Box>

        <Flex
          className="flex-col md:flex-row w-full"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            className="w-full mb-3 md:w-auto md:mb-0"
            disabled={isDisableSubmit}
            variant="primary"
            onClick={onSubmit}
          >
            <Flex justifyContent="center" alignItems="center">
              {isCreating && <LoadingIndicator strokeColor="white" small />}
              <Text ml="8px" fontSize="16px" fontWeight={500}>
                {t(messages.submit())}
              </Text>
            </Flex>
          </Button>
          <Button
            className="w-full md:w-auto"
            variant="secondary"
            onClick={() => !isCreating && props.closeModal()}
          >
            {t(messages.cancel())}
          </Button>
        </Flex>
      </Box>
    </Modal>
  )
}

const Input = styled.input`
  margin-bottom: 16px;
  padding: 16px 20px;
  border: 1px solid ${p => p.theme.border};
  color: ${p => p.theme.text1};
  outline: none;
  width: 100%;
`

const Textarea = styled.textarea`
  padding: 16px 20px;
  border: 1px solid ${p => p.theme.border};
  color: ${p => p.theme.text1};
  outline: none;
  width: 100%;
`

const LocaleButton = styled(Button)<{ active: boolean }>`
  color: ${p => p.theme.text1};
  padding: 0px;
  font-weight: ${p => (p.active ? '700' : '400')};
`
