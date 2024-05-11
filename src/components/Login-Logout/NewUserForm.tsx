import InputWithLabel from '../_common/InputWithLabel/InputWithLabel';

import styles from './Login.module.css';

interface NewUserFormProps {
  handleOnChange: () => void;
  toggleForm: () => void;
}

const NewUserForm = (props: NewUserFormProps) => {
  const { handleOnChange, toggleForm } = props;

  return (
    <>
    <h3 className='text-center mb-4'>Create a User</h3>
    
    <InputWithLabel label="User Name" type="input" onChange={handleOnChange}/>
    <div className={styles.login_lower_text}>Already have a login? <a onClick={toggleForm}>Log In</a></div>
  </>
  )
}

export default NewUserForm