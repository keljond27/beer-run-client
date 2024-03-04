import React from 'react'
import { Modal } from 'react-bootstrap';

interface LoginModalProps {
  showModal: boolean
}

const LoginModal = (props: LoginModalProps) => {

  const { showModal } = props;

  return (
    <Modal style={{ display: showModal ? "block" : "none" }}>
     <div  >LoginModal</div>
    </Modal>
  )
}

export default LoginModal