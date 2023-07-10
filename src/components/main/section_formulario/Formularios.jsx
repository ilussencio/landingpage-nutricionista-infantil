import { useState } from "react";
import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import api from "../../services/api";

export default function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ddi, setDdi] = useState("+55");

    const [errorNome, setErrorNome] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorDdi, setErrorDdi] = useState(false);
    const [errorTelefone, setErrorTelefone] = useState(false);

    async function validar(){
        
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

            axios.post("https://plankton-app-e77tz.ondigitalocean.app/lead", teplateParams,{
                headers: {"Content-type":"application/json; charset=UTF-8"}
            })
            .then((response) => {
                console.log("LEAD CADASTRADO COM SUCESSO", response.status, response.data)
            }, (err) => {
                console.log("ERRO AO CADASTRAR LEAD", err)
            });

            emailjs.send('service_u9kqbyu','template_uidt6za', teplateParams, 'fywtiEQqyfAWjW5PZ')
            .then((response) => {
                console.log("EMAIL ENVIADO COM SUCESSO", response.status, response.text)
                toast.success('💌 EMAIL ENVIADO COM SUCESSO', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setNome("");
                setEmail("")
                setTelefone("")
                setDdi("+55")
            }, (err) => {
                console.log("ERRO AO ENVIAR EMAIL", err)
            })
        }
    }

    return (
        <section className="section-formulario" id="formulario">

            <ToastContainer />

            <div className="container-formulario">
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

            </div>
           

            
        </section>
    )
}