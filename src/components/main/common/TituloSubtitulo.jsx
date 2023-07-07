export default function TituloSubtitulo({titulo, subtitulo}){
    return (
        <div className="titulo-subtitulo">
            <h1 className="titulo">{titulo}</h1>
            <p className="subtitulo">{subtitulo}</p>
        </div>
    )
}