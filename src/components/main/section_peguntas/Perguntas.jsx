import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import { useEffect, useState } from "react";

export default function Perguntas() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        fetch('faqs.json')
            .then(file => file.json())
            .then(conteudo => setFaqs(conteudo.faqs))
    }, [])

    function getFaqs() {
        return faqs.map((faq, id) => {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id={"head" + id}>
                        <h4 className="panel-title">
                            <a className="first" role="button" data-toggle="collapse" data-parent="#accordion"
                                href={"#collapse" + id} aria-expanded="false" aria-controls={"collapse" + id}>
                                {faq.pergunta}
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id={"collapse" + id} className="panel-collapse collapse" role="tabpanel"
                        aria-labelledby={"head" + id}>
                        <div className="panel-body">
                            <p>{faq.resposta}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <section className="faq" id="perguntas">
            <TituloSubtitulo titulo={titulosDescricoesSecoes["perguntas"].titulo}
                subtitulo={titulosDescricoesSecoes["perguntas"].subtitulo} />
            <div className="container">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {getFaqs()}
                </div>
            </div>
        </section>
    )
}