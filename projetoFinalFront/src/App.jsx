import './App.css'
import Recipes from './components/Categories'
import RecipeSearch from './components/RecipesSearch'

function App() {

  return (
    <div className='AppContaine'>
      <div>
        <RecipeSearch/>
      </div>
      <div>
        <Recipes />
      </div>
    </div>

  )
}

export default App
