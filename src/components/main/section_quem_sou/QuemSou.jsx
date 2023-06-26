import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function QuemSou() {
    return (
        <section className="about-me" id="about-me">
            <div className="container">
                <div className="about-me-container">
                    <div className="about-me-title">
                        <TituloSubtitulo titulo={titulosDescricoesSecoes["quemSou"].titulo} subtitulo=
                            {titulosDescricoesSecoes["quemSou"].subtitulo}/>
                    </div>
                    <div className="about-me-flex-container">
                        <div className="about-me-image">
                            <div className="main-image"><img src="src/assets/sabrina_main.png" alt="sabrina"/>
                            </div>
                        </div>
                        <div className="about-me-content">
                            <div className="logo"><img src="src/assets/sabrina_logo.png" alt="logo"/></div>
                            <div className="text">
                                Me chamo Sabrina Penido, sou a nutricionista Materno Infantil que vai te orientar e de
                                mãos dadas vamos
                                trilhar um delicioso e nutritivo caminho, cheio de aprendizados e conquistas.
                                <br/><br/>
                                Formada em Nutrição pela Universidade Antonio Carlos, pós graduanda em Nutrição Materno
                                Infantil
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}