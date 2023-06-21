import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"


import Card from "./Card"

export default function Alertas() {
    return ( 
        <section className="alertas">
            <TituloSubtitulo titulo={titulosDescricoesSecoes["alertas"].titulo} subtitulo={titulosDescricoesSecoes["alertas"].subtitulo}/>
            <div className="carrossel">
                <Card numero={1} texto={"Não aceite novos alimentos."} />
                <Card numero={2} texto={"Rejeita grupos alimentares inteiros."} />
                <Card numero={3} texto={"Sempre faz birra nas horas das refeições."} />
            </div>

            <TituloSubtitulo titulo={"E aí identificou algum sinal?"} subtitulo={"Se sim, então é hora de procurar um atendimento nutricional para o seu filho."}/>

        </section>
    )
}