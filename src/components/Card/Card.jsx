import style from './index.module.css'
import { useNavigate } from 'react-router-dom';




export default function Card({data, onClose }) {
  const navigate = useNavigate();
  return (
    <div className={style.card} >
        <div className={style.buttonConteiner}>
          <button onClick={()=> onClose(data.id)
            } className={style.button}>
          X</button>
        </div>
        <h2 onClick={()=> navigate(`/details/${data.id}`)} >{data.name}</h2>
        <img src={data.image} alt={`${data.name}`} onClick={()=> navigate(`/details/${data.id}`)} /> 
        <h2>{data.species}</h2>
        <h2>{data.gender}</h2>   
    </div>
  );
}
