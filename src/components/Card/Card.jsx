import style from './index.module.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../../features/favoriteSlice';



export default function Card({data, onClose }) {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false)

  const myFavorites = useSelector(state => state.favorites.favorites)
  const dispatch = useDispatch()
  useEffect(() => {
     myFavorites.forEach((fav) => {
        if (fav.id === data.id) {
           setIsFav(true);
        }
     });
  }, [myFavorites]);

  function handleFavorite() {
    if(isFav) {
       setIsFav(false)
       dispatch(removeFavorite(data))
    } else {
       setIsFav(true)
       dispatch(addFavorite(data))
    }
 }






  return (
    <div className={style.card} >
        <div className={style.buttonConteiner}>
        { isFav ? (
               <button onClick={handleFavorite} className={style.button} >❤️</button>
                  ) : (
               <button onClick={handleFavorite} className={style.button} >🤍</button>
                  )
            }
          {
          onClose?
          <button onClick={()=> onClose(data.id)
            } className={style.button}>
          X</button>:null
          }
        </div>
        <h2 onClick={()=> navigate(`/details/${data.id}`)} >{data.name}</h2>
        <img src={data.image} alt={`${data.name}`} onClick={()=> navigate(`/details/${data.id}`)} /> 
        <h2>{data.species}</h2>
        <h2>{data.gender}</h2>   
    </div>
  );
}
