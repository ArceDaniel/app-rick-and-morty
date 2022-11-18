import Card from './Card';
import style from '../styles/conteinerCards.module.css'

export default function Cards({onClose, characters}) {
   
   return( <div className= {style.conteiner}>
    {
      characters.map(character =>(
      <Card data={character}
      onClose = {onClose}
       key={character.id} />
      ))
    }
   </div>);
}
