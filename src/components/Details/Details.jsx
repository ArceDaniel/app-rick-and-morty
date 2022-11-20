import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './index.module.css'

export default function Details(){
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);
    
    return (
        <div>
            <img src={character.image} alt={character.name} />
        </div>
    )
}