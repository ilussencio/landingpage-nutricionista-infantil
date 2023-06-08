import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function QuemSou() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["quemSou"].titulo} subtitulo={titulosDescricoesSecoes["quemSou"].subtitulo}/>
        </section>
    )
}