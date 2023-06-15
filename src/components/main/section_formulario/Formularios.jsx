import { useState } from "react";
import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import emailjs from '@emailjs/browser'

export default function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ddi, setDdi] = useState("");

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
        <section>
            <TituloSubtitulo titulo={titulosDescricoesSecoes["formulario"].titulo} subtitulo={titulosDescricoesSecoes["formulario"].subtitulo}/>

            <form>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/><br />
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/><br />
                <input type="tel" placeholder="DDI" value={ddi} onChange={(e) => setDdi(e.target.value)}/><br />
                <input type="button" value="Enviar" onClick={() => validar()} />
            </form>
        </section>
    )
}