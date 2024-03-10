import { useRef } from 'react';
import { useSelector } from 'react-redux';

import LoginModal from './LoginModal';
import { ModalToggle } from '../_common/BaseModal/BaseModal';

import { stringToTitleCase } from '../../utls/stringUtils';

import { RootState } from '../../store/store';

const Login = () => {

  const loggedInUser = useSelector((state: RootState) => state.users.loggedIn)

  const loginModalRef = useRef<ModalToggle>(null);

  const handleLoginToggle = () => {
    loginModalRef.current?.onToggle();
  }

  return (
    <>
    {loggedInUser ? (
      <>
        Signed in as: <a onClick={handleLoginToggle} title="Not you? Click to switch users...">{stringToTitleCase(loggedInUser.name)}</a>
      </>
    ) : (
      <a onClick={handleLoginToggle}>
      Login?
      </a>
    )}
    <LoginModal refPassthrough={loginModalRef} name="login" handleClose={handleLoginToggle} />
    </>
  )
}

export default Login;