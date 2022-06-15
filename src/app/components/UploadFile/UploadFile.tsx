/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, memo, useState } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import isEmpty from 'lodash/isEmpty'

import { MAX_SIZE_UPLOAD } from 'contants'

import { useToast } from 'contexts/ToastsContext/hooks'

import { formatBytes } from 'utils/formatBytes'
import { translations } from 'locales/translations'

import { Text } from '../Text'
import { RemoveIcon } from '../Svg'
import { Box, Flex } from '../Box'

interface Props {
  multiple?: boolean
  accept: string
  onChange: (files: any[]) => void
}

const UploadFile: React.FC<Props> = props => {
  const { t } = useTranslation()
  const { toastError } = useToast()

  const [uploadFiles, setUploadFiles] = useState<any[]>([])
  const [totalSize, setTotalSize] = useState<number>(0)

  const handleUploadChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!props.multiple && uploadFiles.length) {
        return
      }

      const files = e.target.files as FileList
      let newUploadFiles = [...uploadFiles]
      let _totalSize = totalSize

      Object.keys(files).forEach(i => {
        _totalSize += files[i].size
        newUploadFiles.push(files[i])
      })

      // check total file size maximum
      if (_totalSize > MAX_SIZE_UPLOAD) {
        toastError(
          t(translations.notification.error),
          t(translations.notification.uploadFileSizes),
        )
        newUploadFiles.pop() // remove file
        return
      }

      setUploadFiles(newUploadFiles)
      setTotalSize(_totalSize)
      props.onChange(newUploadFiles)
    },
    [totalSize, uploadFiles, setUploadFiles, setTotalSize],
  )

  const handleDeleteFile = useCallback(
    (index: number) => {
      const newUploadFiles = [...uploadFiles]
      let _totalSize = totalSize

      _totalSize -= newUploadFiles[index].size
      newUploadFiles.splice(index, 1)

      setUploadFiles(newUploadFiles)
      setTotalSize(_totalSize)
      props.onChange(newUploadFiles)
    },
    [totalSize, uploadFiles, setUploadFiles, setTotalSize],
  )

  return (
    <>
      <UploadImage>
        <input
          autoComplete="off"
          name="thumbnail"
          type="file"
          className="file-upload-input"
          multiple={props.multiple}
          accept={props.accept}
          onChange={e => handleUploadChange(e)}
        />
        <Text>{t(translations.homePage.imageUpload)}</Text>
      </UploadImage>
      {!isEmpty(uploadFiles) && (
        <>
          {uploadFiles?.map((item: File, i: number) => (
            <FileItem
              className="p-3 my-2"
              alignItems="center"
              justifyContent="space-between"
              key={i}
            >
              <Text>
                {item.name} ({formatBytes(item.size)})
              </Text>

              <Box
                className="cursor-pointer"
                onClick={() => handleDeleteFile(i)}
              >
                <RemoveIcon />
              </Box>
            </FileItem>
          ))}
        </>
      )}
    </>
  )
}

const UploadImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  background-color: ${p => p.theme.grey1};
  border: 1px dashed ${p => p.theme.border};

  .file-upload-input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
`

const FileItem = styled(Flex)`
  background-color: ${p => p.theme.grey1};
`

export default memo(UploadFile)
