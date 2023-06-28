import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import CardPossoAjudar from "./CardPossoAjudar"
import imagemFamilia from "../../../assets/familia-feliz.jpg"
import possoAjudarCards from "../../../js/possoAjudarCards"


export default function PossoAjudar() {
    return (
        
        <section className="section-posso-ajudar" id="possoajudar">
            <TituloSubtitulo 
                titulo={titulosDescricoesSecoes["possoAjudar"].titulo} 
                subtitulo={titulosDescricoesSecoes["possoAjudar"].subtitulo}
            />
        <div className="box-containers-posso-ajudar">
            <div className="container-posso-ajudar">
                <CardPossoAjudar
                    titulo={possoAjudarCards["posParto"].titulo}
                    listaItems={possoAjudarCards["posParto"].listaItems}
                    color={possoAjudarCards["posParto"].color}
                />
                <CardPossoAjudar
                    titulo={possoAjudarCards["criancas"].titulo}
                    listaItems={possoAjudarCards["criancas"].listaItems}
                    color={possoAjudarCards["criancas"].color}
                />
            </div>
            <div className="container-posso-ajudar">
                <img src={imagemFamilia} alt="" />
            </div>
            <div className="container-posso-ajudar">
                <CardPossoAjudar
                    titulo={possoAjudarCards["familias"].titulo}
                    listaItems={possoAjudarCards["familias"].listaItems}
                    color={possoAjudarCards["familias"].color}
                />
                <CardPossoAjudar
                    titulo={possoAjudarCards["bebes"].titulo}
                    listaItems={possoAjudarCards["bebes"].listaItems}
                    color={possoAjudarCards["bebes"].color}
                />
            </div>
        </div>
        </section>
    )
}