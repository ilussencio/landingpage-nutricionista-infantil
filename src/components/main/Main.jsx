import { useState, useEffect } from 'react';

import Alertas from "./section_alertas/Alertas"
import Chamada from "./section_chamada/Chamada"
import Depoimentos from "./section_depoimentos/Depoimentos"
import Especialidades from "./section_especialidades/Especialidades"
import Formulario from "./section_formulario/Formularios"
import Perguntas from "./section_peguntas/Perguntas"
import PossoAjudar from "./section_posso_ajudar/PossoAjudar"
import QuemSou from "./section_quem_sou/QuemSou"
import Personalizada from "./section_personalizada/personalizada"
import api from '../services/api.jsx';
import axios from 'axios';
import InstaFeed from "./section_instafeed/Instafeed.jsx";
import CookieConsent from "../header/CookieConsent.jsx";

export default function Main() {
    const [status, setStatus] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState('');

    useEffect(() => {
        async function getInfos() {
            axios.get("https://plankton-app-e77tz.ondigitalocean.app/section/active")
            .then((response) => {
                console.log(response.data.data[0])
                let data = response.data.data[0];
                if(response.data.statusCode === 200){
                    data.status == 1 ? setStatus(true) : setStatus(false);
                    setSubtitulo(data.subtitulo);
                    setTexto(data.texto);
                    setLink(data.link);
                    setTitulo(data.titulo);
                    setImagem(data.img);
                }else{
                    console.log("erro ao buscar dados")
                }
            })
            .catch((error) => {
                console.log("erro ao buscar dados - ")
            });
        }
        getInfos();
    }, []);

    return ( 
        <main>
            <CookieConsent />
            <Chamada />
            {status?<Personalizada titulo={titulo} subtitulo={subtitulo} link={link}/>:""}
            <PossoAjudar />
            <Especialidades />
            <Alertas />
            <QuemSou />
            <InstaFeed />
            <Depoimentos />
            <Perguntas />
            {status?<Personalizada titulo={titulo} subtitulo={subtitulo} texto={texto} link={link} imagem={imagem}/>:""}
            <Formulario />
        </main>
    )
}