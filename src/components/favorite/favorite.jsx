import Card from '../Card/Card.jsx';
import style from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from '../../features/favoriteSlice.js';

export default function Favorite() {
  const dispatch = useDispatch()
  const charactersFilter =  useSelector(state => state.favorites.filter)
  const handleFilterForGender = (e) =>{
    dispatch(filterCards(e.target.value))
  }
  const handleFilterForOrder = (e) => dispatch(orderCards(e.target.value));
  




   return( 
   <>
  <div className={style.main}>
  <select onChange={handleFilterForOrder}  className={style.selected} >
   <option value='Ascendente'>Ascendente</option>
   <option value='Descendente'>Descendente</option>
   </select>
   <select  onChange={handleFilterForGender}  className={style.selected}>
   <option value="All">All</option>
   <option value="Male">Male</option>
   <option value="Female">Female</option>
   <option value="Genderless">Genderless</option>
   <option value="unknown">unknown</option>
   </select>
   </div>
   <div className= {style.conteiner}>
    {
      charactersFilter.map(character =>(
        <Card data={character}
        onClose = {null}
        key={character.id} />
        ))
      }
   </div>
   </>
   );
}
