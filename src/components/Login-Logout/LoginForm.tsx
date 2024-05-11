import React from 'react';
import { stringToTitleCase } from '../../utls/stringUtils';

import styles from './Login.module.css';

import { User } from '../../types/types';

interface LoginFormProps {
  loginUser: (e: React.SyntheticEvent) => void;
  usersList: [];
  toggleForm: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { loginUser, usersList, toggleForm } = props;

  return (
    <>
    <h3 className='text-center mb-4'>Login</h3>
    
    <select className='form-select mb-4' onChange={loginUser}>
      <option value={"select"}>Select a user...</option>
      {usersList?.map((user: User, index: number) => {
        return <option value={index}>{stringToTitleCase(user.name)}</option>
      })}
    </select>
    <div className={styles.login_lower_text}>Don't have a login? <a onClick={toggleForm}>Create One</a></div>
  </>
  )
}

export default LoginForm