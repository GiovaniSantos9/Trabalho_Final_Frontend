import './App.css'
import Header from './components/Header'
import Recipes from './components/Categories'

function App() {

  return (
    <div className='AppContaine'>
      <div>
        <Header />
      </div>
      <div>
        <Recipes />
      </div>
    </div>

  )
}

export default App
