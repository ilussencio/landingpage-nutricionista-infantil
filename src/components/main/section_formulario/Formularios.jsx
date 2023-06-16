import { useState } from "react";
import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import emailjs from '@emailjs/browser'


export default function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ddi, setDdi] = useState("+55");

    function validar(){
        if(nome === "" || email === "" || telefone === "" || ddi === ""){
            alert("Preencha todos os campos");
            return false;
        }
        const teplateParams = {
            nome: nome,
            email: email,
            telefone: telefone,
            ddi: ddi
        }
        emailjs.send('service_u9kqbyu','template_uidt6za', teplateParams, 'fywtiEQqyfAWjW5PZ')
        .then((response) => {
            console.log("EMAIL ENVIADO COM SUCESSO", response.status, response.text)
            setNome("");
            setEmail("")
            setTelefone("")
            setDdi("")
        }, (err) => {
            console.log("ERRO AO ENVIAR EMAIL", err)
        })
    }

    return (
        <section className="section-formulario">
            <TituloSubtitulo
                titulo={titulosDescricoesSecoes["formulario"].titulo} 
                subtitulo={titulosDescricoesSecoes["formulario"].subtitulo}
            />

            <form className="form">
                <div className="input">
                    <label htmlFor="nome">Nome*</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div className="input">
                    <label htmlFor="email">E-mail*</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="telefone">
                    <div className="input" className="ddi">
                        <label htmlFor="telefone">DDI*</label>
                        <input type="tel" value={ddi} onChange={(e) => setDdi(e.target.value)}/>
                    </div>

                    <div className="input" className="numero">
                        <label htmlFor="telefone">Telefone*</label>
                        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                    </div>
                </div>

                <input className="button" type="button" value="ENVIAR" onClick={() => validar()} />
            </form>
        </section>
    )
}