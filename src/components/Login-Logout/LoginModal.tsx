import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { User } from '../../types/types';

import InputWithLabel from '../_common/InputWithLabel/InputWithLabel';
import BaseModal, { ModalToggle } from '../_common/BaseModal/BaseModal';

import { stringToTitleCase } from '../../utls/stringUtils';

import { getUsers } from '../../store/api/users';
import { login } from '../../store/slices/userSlice';
import { AppDispatch, RootState } from '../../store/store';

interface LoginModalProps {
  handleClose: () => void;
  name: string | null;
  refPassthrough: React.Ref<ModalToggle>
}

const LoginModal = (props: LoginModalProps) => {
  const { handleClose, refPassthrough } = props;

  const dispatch: AppDispatch = useDispatch();
  const usersList = useSelector((state: RootState) => state.users.userData)

  const [] = useState();

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const handleOnChange = () => {

  }

  const loginUser = (e: React.SyntheticEvent) => {
    dispatch(login(usersList[(e.target as HTMLInputElement).value]))
    handleClose();
  }

  const modalBody = (
    <>
      <InputWithLabel label="User Name" type="input" onChange={handleOnChange}/>
      <select className='form-select' onChange={loginUser}>
        <option value={"select"}>Select a user...</option>
        {usersList?.map((user: User, index: number) => {
          return <option value={index}>{stringToTitleCase(user.name)}</option>
        })}
      </select>
    </>
  );
  const footer = (
    <Button onClick={handleClose} variant='outline-secondary'>Cancel</Button>
  );

  return (
    <BaseModal ref={refPassthrough} handleClose={handleClose} title="Login" footer={footer} body={modalBody} size="sm" theme="dark" />
  )
}

export default LoginModal;