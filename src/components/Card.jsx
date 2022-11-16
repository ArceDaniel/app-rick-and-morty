import styleCard from '../styles/card.module.css'
import styleButton from '../styles/buton.module.css'

export default function Card(props) {
   const {data} = props
   return (
      <div className={styleCard.card}>
            <button onClick={data.onClose} className={styleButton.button}>
             X</button>
            <img  src={data.image} alt={`image of ${data.name}`} /> 
            <h2 className="name-card">{data.name}</h2>
            <h2>{data.species}</h2>
            <h2>{data.gender}</h2>
            <div>   
            </div>
         
      </div>
   );
}
