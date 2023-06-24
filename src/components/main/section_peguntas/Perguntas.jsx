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
                // eslint-disable-next-line react/jsx-key
                <li>
                    <input type="radio" id={id} name="accordion" className="radio" key={id}/>
                    <label for={id}>{faq.pergunta}</label>
                    <div className="answer">{faq.resposta}</div>
                </li>
            )
        })
    }

    return (
        <section className={"faq"}>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["perguntas"].titulo}
                             subtitulo={titulosDescricoesSecoes["perguntas"].subtitulo} />
            <div className="wrapper">
                <ul className="accordion">
                    {getFaqs()}
                </ul>
            </div>
        </section>

    )
}