import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Formulario() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["formulario"].titulo} subtitulo={titulosDescricoesSecoes["formulario"].subtitulo}/>
        </section>
    )
}