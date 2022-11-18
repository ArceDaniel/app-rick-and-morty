import styleCard from '../styles/card.module.css'
import styleButton from '../styles/buton.module.css'

export default function Card({data, onClose }) {
   
   return (
      <div className={styleCard.card}>
            <div className={styleButton.buttonConteiner}>
            <button onClick={()=>onClose(data.id)} className={styleButton.button}>
             X</button>
            </div>
            <h2>{data.name}</h2>
            <img src={data.image} alt={`${data.name}`} /> 
            <h2>{data.species}</h2>
            <h2>{data.gender}</h2>
            <div>   
            </div>
         
      </div>
   );
}
