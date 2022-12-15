import './App.css'
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/About/About.jsx'
import Details from './components/Details/Details.jsx'
import Forms from './components/forms/forms.jsx'
import Favorite from './components/favorite/favorite';


function App () {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) =>{
      await fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
  const location = useLocation();
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "example@gmail.com";
  const password = "password1";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }else{
      alert('datos invalidos')
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  

  return (
    <div className='App'>
           {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
