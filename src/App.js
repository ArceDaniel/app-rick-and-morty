import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/nav/nav'
import {useState} from 'react'


function App () {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) =>{
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
           const aux = characters.filter((char) => char.id === data.id)
           console.log(aux)
          if(!aux.length)  return setCharacters(oldChars => [...oldChars, data])
          }else {
            window.alert('No hay personajes con ese ID');
         }
        });
  }
//   setCharacters((oldChars) =>{ 
//     const exist = oldChars.forEach((chard)=>{
//       if(chard.id === data.id) return chard
//     })
//     console.log(exist)
//     return [...oldChars, data]
//   });
// } else {
//   window.alert("No hay personajes con ese ID");

  const onClose = async (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App'>
        <Nav onSearch = {onSearch}/>
        <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default App
