import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home';
import PokemonEntry from './assets/pages/PokemonEntry';
import NavBar from './assets/components/NavBar';

function App() {


  return (
    <>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<PokemonEntry />} />
        </Routes>
    </>
  )
}

export default App
