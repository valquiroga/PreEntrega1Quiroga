import './App.css'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <ItemListConteiner greeting={'Hello World!'}/>
    </div>
  )

}

export default App
