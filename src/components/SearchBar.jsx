import styleButton from '../styles/buton.module.css'
import styleInput from '../styles/input.module.css'

export default function SearchBar(props) {
   return (
      <div className={styleButton.conteiner}>
         <input type="text" name="text" className= {styleInput.input} placeholder="buscar..."/>
      <button onClick={props.onSearch} className={styleButton.button}>Agregar</button>
      </div>
   );
}
