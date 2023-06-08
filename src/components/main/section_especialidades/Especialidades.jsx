import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Especialidades() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["especialidades"].titulo} subtitulo={titulosDescricoesSecoes["especialidades"].subtitulo}/>
        </section>
    )
}