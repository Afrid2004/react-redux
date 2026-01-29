import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { store } from './services/Store'

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
