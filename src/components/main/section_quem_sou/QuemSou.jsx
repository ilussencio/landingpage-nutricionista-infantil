import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"

export default function QuemSou() {
    return (

    <section className="about">
        <div className="main">
            <div className="about-text">
                <TituloSubtitulo titulo={titulosDescricoesSecoes["quemSou"].titulo} subtitulo={titulosDescricoesSecoes["quemSou"].subtitulo}/>
                <div className="about-text-principal">
                    <p>Meu nome é Sabrina Penido Bertho Macedo e sou formada em Nutrição na Universidade Presidente
                        Antônio Carlos
                        em Araguari. Pós graduanda em Nutrição Materno Infantil pelo Instituto Pelitude Educação,
                        formada em
                        coaching nutricional infantil e adepta ao Método Nutrikids criado por Andréa Lins.</p>
                </div>
                <div className="about-text-secundario">
                    <p>Meu atendimento vai muito além de um plano alimentar, junto com você traçamos estratégias para
                        que o seu
                        filho se alimente bem.<br/><span className="about-text-signature">Sabrina Penido.</span></p>
                </div>
            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ohlPzj4-rfPnGKEwETvMiSSoFlsUnqO7tg&usqp=CAU"/>
        </div>
    </section>
    )
}