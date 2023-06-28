import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import CardDepoimento from "./CardDepoimento"

export default function Depoimentos() {
    const depoimentos = [
        {
            nome: "Amanda Cabroni",
            depoimento: "Excelente nutricionista, nossa filha se alimenta super bem e é bastante estimulada a sempre experimentar coisas novas.",
            imagem: "depoimento1.jpg",
            estrelas: "avaliacao.png"
        },
        {
            nome: "Carmem Lúcia Costa",
            depoimento: "Ótima experiência, com resultados relevantes. Eu super recomendo. Satisfeitíssima com os resultados.",
            imagem: "depoimento2.jpeg",
            estrelas: "avaliacao.png"
        },
        {
            nome: "Isabella Ferreira",
            depoimento: "A Sabrina amplia os horizontes e faz a alimentação ser entendida de uma maneira leve! Aprendo muito com ela.",
            imagem: "depoimento3.jpg",
            estrelas: "avaliacao.png"
        }
    ]

    return (
        <section className="depoimentos" id="depoimentos">
            <div className="depoimentos-titulo">
                <TituloSubtitulo 
                    titulo={titulosDescricoesSecoes["depoimentos"].titulo} 
                    subtitulo={titulosDescricoesSecoes["depoimentos"].subtitulo}
                />
            </div>
           
            <div className="depoimentos-conteudo">
                { depoimentos.map((depoimento, index) => {
                     return <CardDepoimento key={index} nome={depoimento.nome} depoimento={depoimento.depoimento} imagem={depoimento.imagem} estrelas={depoimento.estrelas}/>})
                }
            </div>
        </section>
    )
}