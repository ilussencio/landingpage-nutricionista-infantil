import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import {useEffect, useState} from "react";

export default function Perguntas() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        fetch('faqs.json')
            .then(file => file.json())
            .then(conteudo => setFaqs(conteudo.faqs))
        console.log('useEffect rodou!')
    }, [])

    function getFaqs() {
        return faqs.map((faq, id) => {
            return (
                <details key={id}>
                    <summary>{faq.pergunta}</summary>
                    <p>{faq.resposta}</p>
                </details>
            )
        })
    }

    return (
        <section className={"faq"}>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["perguntas"].titulo}
                             subtitulo={titulosDescricoesSecoes["perguntas"].subtitulo}/>
            <div className="faq-detalhes">
                {getFaqs()}
            </div>
        </section>

    )
}