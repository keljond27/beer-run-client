import { ReactNode, useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './BaseModal.module.css';

export interface ModalToggle {
  onToggle: () => void;
}

interface BaseModalProps {
  body: string | ReactNode;
  footer?: ReactNode | null;
  handleClose: () => void;
  size: 'sm' | 'lg' | 'xl' | undefined;
  theme?: 'dark' | 'light' | undefined;
  title?: string | ReactNode;
  ref: React.Ref<ModalToggle>
  style?: {}
}

const BaseModal = forwardRef<ModalToggle, BaseModalProps>((props, ref) => {
  const { body, footer, size, style, theme, title } = props;
  const { Body, Footer, Header, Title } = Modal;

  
  const [showModal, setShowModal] = useState(false);
  
  const onToggle = () => {
    setShowModal(!showModal);
  }

  useImperativeHandle(ref, () => ({ onToggle }), [showModal])
  
  return (
    <Modal
      ref={ref}
      show={showModal}
      size={size}
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onHide={onToggle}
      data-bs-theme={theme}
      style={{ color: `${theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : 'rgb(33, 37, 41)'}`}}
    >
      {title ? 
        <Header closeButton style={{ padding: "5px 10px" }}>
          <Title><span style={{fontSize: "20px"}} >{title}</span></Title>
        </Header>
      : null}
      <Body style={{...style}} className={styles.modal_body}>{body}</Body>
        {footer === null || footer === undefined ? null :
          <Footer>
          {footer}
          </Footer>
        }
    </Modal>
  )
})

export default BaseModal;
