import { useState, useEffect } from 'react';
import TituloSubtitulo from '../common/TituloSubtitulo';

export default function Personalizada({titulo, subtitulo, texto, link}) {
    
    
    return(
            <section className='personalizada'>
                <div className='personalizada_container'>
                    <TituloSubtitulo titulo={titulo} subtitulo={subtitulo} />
                    
                    {!texto?<></>                        
                    :<div className='personalizada_corpo'>
                        <div>
                            <p className='personalizada_texto'>{texto}</p>
                        </div>
                        <div>
                            <img className='personalizada_image' src="bebe.png"/>
                        </div>
                    </div>}                 
                    <a className='personalizada_button' href={link}>Clique e saiba mais!</a>
                </div>
            </section>
    );
}