import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Depoimentos() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["depoimentos"].titulo} subtitulo={titulosDescricoesSecoes["depoimentos"].subtitulo}/>
        </section>
    )
}