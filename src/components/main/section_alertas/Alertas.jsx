import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Alertas() {
    return (
        <section>
             <TituloSubtitulo titulo={titulosDescricoesSecoes["alertas"].titulo} subtitulo={titulosDescricoesSecoes["alertas"].subtitulo}/>
        </section>
    )
}