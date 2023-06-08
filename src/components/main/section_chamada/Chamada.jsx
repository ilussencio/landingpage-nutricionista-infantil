import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Chamada() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["chamada"].titulo} subtitulo={titulosDescricoesSecoes["chamada"].subtitulo}/>
        </section>
    )
}