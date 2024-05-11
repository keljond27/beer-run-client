import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
//import InputWithLabel from '../_common/InputWithLabel/InputWithLabel';
import BaseModal, { ModalToggle } from '../_common/BaseModal/BaseModal';

import { getUsers } from '../../store/api/users';
import { login } from '../../store/slices/userSlice';
import { AppDispatch, RootState } from '../../store/store';
import NewUserForm from './NewUserForm';

interface LoginModalProps {
  handleClose: () => void;
  name: string | null;
  refPassthrough: React.Ref<ModalToggle>
}

const LoginModal = (props: LoginModalProps) => {
  const { handleClose, refPassthrough } = props;

  const dispatch: AppDispatch = useDispatch();
  const usersList = useSelector((state: RootState) => state.users.userData)

  const [formToggle, setFormToggle] = useState(false);

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const loginUser = (e: React.SyntheticEvent) => {
    dispatch(login(usersList[(e.target as HTMLInputElement).value]))
    handleClose();
  }

  const toggleForm = () => {
    setFormToggle(!formToggle);
  }

  const handleOnChange = () => {

  }

  const modalBody = (
    <>
      { formToggle ?
        <NewUserForm handleOnChange={handleOnChange} toggleForm={toggleForm}/>
        :
        <LoginForm loginUser={loginUser} usersList={usersList} toggleForm={toggleForm}/>
      }
    </>
  );

  return (
    <BaseModal ref={refPassthrough} handleClose={handleClose} body={modalBody} size="sm" theme="dark"/>
  )
}

export default LoginModal;
