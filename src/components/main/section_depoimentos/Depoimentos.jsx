import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import CardDepoimento from "./CardDepoimento"

export default function Depoimentos() {
    return (
        <section className="depoimentos" id="depoimentos">
            <div className="depoimentos-titulo">
                <TituloSubtitulo 
                    titulo={titulosDescricoesSecoes["depoimentos"].titulo} 
                    subtitulo={titulosDescricoesSecoes["depoimentos"].subtitulo}
                />
            </div>
           
            <div className="depoimentos-conteudo">
                <CardDepoimento 
                    nome={'Amanda Cabroni'} 
                    depoimento={'Excelente nutricionista, nossa filha se alimenta super bem e é bastante estimulada a sempre experimentar coisas novas.'}
                    imagem={"/public/depoimento1.jpg"}
                    estrelas={"/public/avaliacao.png"}
                />

                <CardDepoimento 
                    nome={'Carmem Lúcia Costa'} 
                    depoimento={'Ótima experiência, com resultados relevantes. Eu super recomendo. Satisfeitíssima com os resultados.'}
                    imagem={"/public/depoimento2.jpeg"}
                    estrelas={"/public/avaliacao.png"}
                />

                <CardDepoimento 
                    nome={'Isabella Ferreira'} 
                    depoimento={'A Sabrina amplia os horizontes e faz a alimentação ser entendida de uma maneira leve! Aprendo muito com ela. Ótima pessoa e profissional!'}
                    imagem={"/public/depoimento3.jpeg"}
                    estrelas={"/public/avaliacao.png"}
                />
            </div>
        </section>
    )
}