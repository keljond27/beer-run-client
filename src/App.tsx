import { Provider } from 'react-redux';
import store from './store/store';

import StartingBlock from './containers/StartingBlock/StartingBlock'

import './App.module.css'

function App() {
  return (
      <Provider store={store}>
        <StartingBlock />
      </Provider>
  )
}

export default App
