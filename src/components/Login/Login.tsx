import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginModal from './LoginModal';

import { RootState } from '../../store/store';

const Login = () => {
  
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state: RootState) => state.users.userData)

  const [ showLoginModal, setShowLoginModal ] = useState(false);

  const handleLoginToggle = () => {
    setShowLoginModal(!showLoginModal);
  }

  return (
    <>
    {loggedInUser ? (
      <>
      Signed in as:<a href="#login">{loggedInUser.name}</a>
      </>
    ) : (
      <a onClick={handleLoginToggle}>
      Login?
      </a>
    )}
    <LoginModal showModal={showLoginModal}/>
    </>
  )
}

export default Login;