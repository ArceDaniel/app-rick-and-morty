import Card from '../Card/Card.jsx';
import style from './index.module.css'

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
