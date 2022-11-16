import Card from './Card';
import style from '../styles/conteinerCards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return( <div className= {style.conteiner}>
    {
      characters.map(character => <Card data={character} key={character.name} />)
    }
   </div>);
}
