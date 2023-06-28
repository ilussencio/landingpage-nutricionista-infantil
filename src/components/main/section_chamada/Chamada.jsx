import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function Chamada() {
    return (
        <section className="chamada" id="chamada">
            <div className="texto">
                <TituloSubtitulo titulo={titulosDescricoesSecoes["chamada"].titulo} subtitulo={titulosDescricoesSecoes["chamada"].subtitulo}/>
            </div>
        </section>
    )
}