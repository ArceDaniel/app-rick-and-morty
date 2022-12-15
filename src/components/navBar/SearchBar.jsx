import { useState } from 'react';
import style from './navBar.module.css'

export default function SearchBar({onSearch, clicked}) {
   const [id, setId] = useState('');
   const handleChange = (e) => {
      const { value } = e.target;
      setId(value)
   }
   return (
      <div className={style.conteiner} style={clicked ? {visibility:'hidden'}: null }>
         <form onSubmit={(e)=>{
         e.preventDefault();
         onSearch(id);
         setId('')
      }} >
         <input onChange={handleChange}
         value={id}
         className = {style.input} 
         placeholder="Search by ID..."/>
      <button 
      type='submit'
      className={style.button}>add</button>
      </form>
      </div>
   );
}
