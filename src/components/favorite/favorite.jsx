import Card from '../Card/Card.jsx';
import style from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from '../../features/favoriteSlice.js';

export default function Favorite() {
  const dispatch = useDispatch()
  const charactersFilter =  useSelector(state => state.favorites.filter)
  const handleFilterForGender = (e) =>{
    console.log(e.target.value)
    dispatch(filterCards(e.target.value))
  }
  const handleFilterForOrder = (e) =>{
    console.log(e.target.value)
    dispatch(orderCards(e.target.value))
  }




   return( 
  <div>
  <div>
  <label htmlFor="cars">Filter your cards:</label>
   <select onChange={handleFilterForOrder} >
   <option value={true}>Ascendente</option>
   <option value={false}>Descendente</option>
   </select>
   <select  onChange={handleFilterForGender} >
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
  </div>
   );
}
