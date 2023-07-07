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

export default function Main() {
    const [status, setStatus] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        async function getInfos() {
            await fetch('http://localhost:3000/section/active')
            .then((response) => response.json())
            .then((response) => {
                setStatus(response.data[0].status);
                setTitulo(response.data[0].titulo);
                setSubtitulo(response.data[0].subtitulo);
                setTexto(response.data[0].texto);
                setLink(response.data[0].link);
            })
            .catch((error) => {console.log("Erro")});
        }
        getInfos();
    }, []);


    return ( 
        <main>
            <Chamada />
            <Personalizada titulo={titulo} subtitulo={subtitulo} link={link}/>
            <PossoAjudar />
            <Especialidades />
            <Alertas />
            <QuemSou />
            <Personalizada titulo={titulo} subtitulo={subtitulo} texto={texto} link={link}/>
            <Depoimentos />
            <Perguntas />
            <Formulario />
        </main>
    )
}