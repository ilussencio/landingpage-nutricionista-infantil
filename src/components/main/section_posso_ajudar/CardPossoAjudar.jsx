
export default function CardPossoAjudar({titulo, listaItems, color}){
    console.log(listaItems)
    return(
        <div className="container-card-posso-ajudar" style={{color:`${color}`}}>
            <h1>{titulo}</h1>
            <ul className="card-posso-ajudar" style={{backgroundColor:`${color}`}}>
                {listaItems.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}