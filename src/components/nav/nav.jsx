import { Link } from "react-router-dom";
import SearchBar from "../navBar/SearchBar";
import style from './index.module.css'

export default function Nav({onSearch}) {
    return (
      <div className={style.conteiner}>
        <Link to={'/about'} className={style.about}>
        <h2 className={style.about}>About</h2>
        </Link>
        <Link to={'/'} className={style.about}>
        <h2 className={style.about}>Home</h2>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    );
 }
 