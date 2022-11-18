import { useState } from 'react';
import style from './navBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange = (e) => {
      const { value } = e.target;
      setId(value)
   }
   return (
      <div className={style.conteiner}>
         <input onChange={handleChange} 
         className= {style.input} 
         placeholder="buscar por ID..."/>
      <button onClick={()=>{
         onSearch(id);
      }} 
      onKeyPress={()=>{
         onSearch(id);
      }} 
      className={style.button}>Agregar</button>
      </div>
   );
}
