import { useState } from 'react';
import style from './navBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange = (e) => {
      const { value } = e.target;
      setId(value)
   }
   return (
      <>
         <input onChange={handleChange}
         id='inputSearch'
         className= {style.input} 
         placeholder="buscar por ID..."/>
      <button onClick={(e)=>{
         document.getElementById('inputSearch').value = '';
         onSearch(id);
      }} 
      className={style.button}>Agregar</button>
      </>
   );
}
