import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './index.module.css'

export default function Details(){
    const { id } = useParams();
    console.log(id)
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
    console.log(character)
    return (
      <div className={style.card}>
        <div  className={style.imgContainer}>
          <img src={character.image} alt={character.name} className={style.img} />
        </div>
        <div className={style.descrition}>
          <h2>{character.name}</h2>   
          <h2><span style={{color:' #ae00ff'}}>Origen: </span>{character.origin?.name}</h2>
          <h2><span style={{color:' #ae00ff'}}>Especie:  </span>{character.species}</h2>
          <h2><span style={{color:' #ae00ff'}}>Estado:  </span>{character.status}</h2>
          <h2><span style={{color:' #ae00ff'}}>Genero:  </span>{character.gender}</h2>
        </div>
      </div>
    )
}