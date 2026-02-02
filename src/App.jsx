import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { store } from './services/Store'
import FetchData from './components/FetchData'
import Header from './layouts/Header'

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <div className="d-flex gap-2 justify-between flex-wrap">
          <Counter />
          <FetchData />
        </div>
      </div>
    </Provider>
  )
}

export default App
