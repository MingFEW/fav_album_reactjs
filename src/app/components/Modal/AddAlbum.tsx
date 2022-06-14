import React, { FunctionComponent } from 'react'
import Modal from 'react-modal'
import { RemoveIcon } from 'app/components/Svg'
import { useTranslation } from 'react-i18next'
import { messages } from './messages'

export type Props = {
  isOpen: boolean
  closeModal?(): void
}

const AddAlbum: React.FC<Props> = ({ isOpen, closeModal }) => {
  const { t } = useTranslation()
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Album Modal"
      className="aModal album-modal"
      overlayClassName="aModal-overlay"
    >
      <div className="inner relative">
        <div className="close-modal" onClick={closeModal}>
          <RemoveIcon />
        </div>
        <div className="modal-body">ddsdsds</div>
        <div className="modal-footer">dsfsfsfs Footer</div>
      </div>
    </Modal>
  )
}

export default AddAlbum
