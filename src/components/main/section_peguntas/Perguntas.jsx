import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Perguntas() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["perguntas"].titulo} subtitulo={titulosDescricoesSecoes["perguntas"].subtitulo}/>
        </section>
    )
}