import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function PossoAjudar() {
    return (
        
        <section id="possoajudar">
            <TituloSubtitulo titulo={titulosDescricoesSecoes["possoAjudar"].titulo} subtitulo={titulosDescricoesSecoes["possoAjudar"].subtitulo}/>
        </section>
    )
}