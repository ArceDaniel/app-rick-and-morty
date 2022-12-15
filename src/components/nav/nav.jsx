import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../navBar/SearchBar";
import style from './index.module.css'

export default function Nav({onSearch}) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const goto = (e)=>{
    const GO = e.target.innerText || e.target.id
    console.log('hola')
     navigate(`/${GO}`)
     setClicked(false)
  }
  return (
      <div className={style.conteiner}>
          <div className={`${style.initial} ${clicked ? style.active : ''}`} />
           <div className={`${style.navIcon} ${clicked ? style.open : ''}`}
           onClick={handleClick}>
           <span></span>
           <span></span>
           <span></span>
        </div>
        <div  onClick={goto} className={`${style.links} ${clicked ? style.active : ''}`}>
        <div className={style.about}>
        <h2 className={style.about} id='about' onClick={goto}>About</h2>
        </div>
        <div className={style.about}>
        <h2 className={style.about} id='Favorite' onClick={goto}>Favorite</h2>
        </div>
        <div className={style.about} >
        <h2 className={style.about} onClick={goto}>Home</h2>
        </div>
        </div>

        <SearchBar
         clicked = {clicked}
         onSearch={onSearch} />
      </div>
    );
 }
 