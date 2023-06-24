import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function QuemSou() {
    return (

    <section className="about">
        <div className="main">
            <div className="about-text">
                <TituloSubtitulo titulo={titulosDescricoesSecoes["quemSou"].titulo} subtitulo={titulosDescricoesSecoes["quemSou"].subtitulo}/>
                <div className="about-text-principal">
                    <p>Me chamo Sabrina Penido, sou a nutricionista Materno Infantil que vai te orientar e de mãos dadas vamos trilhar um delicioso e nutritivo caminho, cheio de aprendizados e conquistas.</p>
                </div>
                <div className="about-text-secundario">
                    <p>Formada em Nutrição pela Universidade Antonio Carlos, pós graduanda em Nutrição Materno Infantil<br/><span className="about-text-signature">Sabrina Penido.</span></p>
                </div>
            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ohlPzj4-rfPnGKEwETvMiSSoFlsUnqO7tg&usqp=CAU"/>
        </div>
    </section>
    )
}