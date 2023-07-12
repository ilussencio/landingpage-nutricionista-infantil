import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import Animacao from "../../tools/Animacao"
import foto from "../../../assets/sabrina_main.png"
export default function QuemSou() {
    return (
        <section className="about-me" id="quemSou">
            <div className="container">
                <div className="about-me-container">
                    <div className="about-me-title">
                        <TituloSubtitulo titulo={titulosDescricoesSecoes["quemSou"].titulo} subtitulo=
                            {titulosDescricoesSecoes["quemSou"].subtitulo}/>
                    </div>
                    <div className="about-me-flex-container">
                        <div className="main-image">
                            <img src={foto} alt="sabrina"/>
                        </div>
                       
                        <div className="about-me-content">
                            <div className="text-one">
                                Me chamo Sabrina Penido, sou a nutricionista Materno Infantil que vai te orientar e, de
                                mãos dadas, vamos trilhar um delicioso e nutritivo caminho, cheio de aprendizados e conquistas.
                            </div>
                            <div className="text-two">
                                Formada em Nutrição pela Universidade Antônio Carlos, pós graduanda em Nutrição Materno Infantil.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Animacao css_identifier=".about-me-content" easing_type="ease-in" duration={800}/>
            <Animacao css_identifier=".about-me-image" easing_type="ease-in" duration={400}/>
        </section>
    )
}