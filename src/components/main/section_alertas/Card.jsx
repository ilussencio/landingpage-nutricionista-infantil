export default function Card({numero, texto}){
    return (
        <div className="card">
            <div className="card_numero">ALERTA {numero}</div>
            <div className="card_descricao">{texto}</div>
        </div>
    )
}