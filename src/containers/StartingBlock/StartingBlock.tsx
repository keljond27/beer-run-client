import { useState } from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

//import { getUserById, getUsers } from '../../store/api/users';
import { getTypes } from '../../store/api/types';
//import { getRecipes } from '../../store/api/recipes';

import Input from '../../components/common/Input/Input';
import styles from './StartingBlock.module.css';

const StartingBlock = () => {
    
  const [testInput, setTestInput] = useState("")

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTypes());
    //dispatch(getUserById("65cd1b37a1878ad7c4e4dc24"))
  }, [])

  return (
    <div className={styles.test}>
      <Input 
        handleOnChange={(e: React.SyntheticEvent) => { setTestInput((e.target as HTMLInputElement).value) }}
        name="test"
        value={testInput}
      />
      <div>
      {testInput}
      </div>
    </div>
  )
}

export default StartingBlock;