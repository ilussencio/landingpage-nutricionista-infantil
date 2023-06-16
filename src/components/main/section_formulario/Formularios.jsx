import { useState } from "react";
import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import emailjs from '@emailjs/browser'


export default function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ddi, setDdi] = useState("+55");

    const [errorNome, setErrorNome] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorDdi, setErrorDdi] = useState(false);
    const [errorTelefone, setErrorTelefone] = useState(false);

    function validar(){
        if(nome === "")
            setErrorNome(true);
        if(email === "")
            setErrorEmail(true);
        if(ddi === "")
            setErrorDdi(true);
        if(telefone === "")
            setErrorTelefone(true);

        if(nome !== "" && email !== "" && ddi !== "" && telefone !== ""){
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
                    <input type="text" value={nome} onChange={(e) => {
                        if(nome !== "")
                            setErrorNome(false)
                        setNome(e.target.value)
                        }}/>
                    {errorNome?<label className="error">Digite um nome</label>:null}
                </div>

                <div className="input">
                    <label htmlFor="email">E-mail*</label>
                    <input type="email" value={email} onChange={(e) => {
                        if(email !== "")
                            setErrorEmail(false)
                        setEmail(e.target.value)
                        }}/>
                    {errorEmail?<label className="error">Digite um e-mail</label>:null}
                </div>

                <div className="telefone">
                    <div className="ddi">
                        <label htmlFor="telefone">DDI*</label>
                        <input type="tel" value={ddi} onChange={(e) => {
                            if(ddi !== "")
                                setErrorDdi(false)
                            setDdi(e.target.value)
                            }}/>
                        {errorDdi?<label className="error">Digite um DDI</label>:null}
                    </div>

                    <div className="numero">
                        <label htmlFor="telefone">Telefone*</label>
                        <input type="tel" value={telefone} onChange={(e) => {
                            if(telefone !== "")
                                setErrorTelefone(false)
                            setTelefone(e.target.value)
                            }}/>
                        {errorTelefone?<label className="error">Digite um telefone</label>:null}
                    </div>
                </div>

                <input className="button" type="button" value="ENVIAR" onClick={() => validar()} />
            </form>
        </section>
    )
}