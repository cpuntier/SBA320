import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home';
import PokemonEntry from './assets/pages/PokemonEntry';
function App() {


  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/:name" element = {<PokemonEntry/>}/>
    </Routes>
    </>
  )
}

export default App
