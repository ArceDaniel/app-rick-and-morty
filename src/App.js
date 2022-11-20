import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/nav/nav'
import About from './components/About/About'
import Details from './components/Details/Details'
import { useState } from 'react'
import { Route, Routes} from 'react-router-dom';


function App () {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) =>{
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
           const aux = characters.filter((char) => char.id === data.id)
          if(!aux.length)  return setCharacters(oldChars => [...oldChars, data]);
          return window.alert('Perosnaje ya agregado');
          }else {
            window.alert('No hay personajes con ese ID');
         }
        });
  }

  const onClose = async (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  

  return (
    <div className='App'>
        <Nav onSearch = {onSearch}/>
        <Routes>
          <Route path='/' element = {  <Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element = {  <About />} />
          <Route path='/details/:id' element = {  <Details />} />
        </Routes>
      
    </div>
  )
}

export default App
