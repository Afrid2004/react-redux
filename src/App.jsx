import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { store } from './services/Store'
import FetchData from './components/FetchData'
import Header from './layouts/Header'
import ReduxToolkit from './Toolkit'
import { RTKStore } from './Toolkit/Store'
import FetchPosts from './Toolkit/FetchPosts'

function App() {
  return (
      <div className='container'>
        <Header />
        <div className="d-flex gap-2 justify-between flex-wrap">
          <Provider store={store}>
            <Counter />
            <FetchData />
          </Provider>
          <Provider store={RTKStore}>
            <ReduxToolkit />
            <FetchPosts />
          </Provider>
        </div>
      </div>
  )
}

export default App
