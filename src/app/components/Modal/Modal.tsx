import React, { FC } from 'react'
import ReactModal from 'react-modal'

import { Box } from '../Box'
import { StyledModal } from './StyledModal'

export type Props = {
  isOpen: boolean
  closeModal?(): void
  children: React.ReactNode
}

ReactModal.setAppElement('#root')

const Modal: FC<Props> = ({ isOpen, closeModal, children }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <Box className="relative">
        <div className="close-modal" onClick={closeModal}>
          X
        </div>
        {children}
      </Box>
    </StyledModal>
  )
}

export default React.memo(Modal)
