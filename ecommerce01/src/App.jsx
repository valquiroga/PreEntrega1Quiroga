// import './App.css'
// import NavBar from './components/NavBar/NavBar'
// import Button from './components/Button/Button'
// import ItemListConteiner from './components/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

// function App() {

//   return (
//     <div className='App'>
//       <NavBar />
//       <ItemListConteiner greeting={'Hello World!'}/>
//       <Button label="oli"/>
//       <ItemDetailContainer />
//     </div>
//   )

// }

// export default App
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/'element={<ItemListConteiner greeting={'Hello World!'}/>}/>
            <Route path='/category/:categoryId'element={<ItemListConteiner greeting={'Hello World!'}/>}/>
            <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
            
            {/* <ItemListConteiner greeting={'Hello World!'}/>
            <Button label="oli"/>
            <ItemDetailContainer /> */}
          </Routes>
      </BrowserRouter>
    </div>
    
  )

}

export default App