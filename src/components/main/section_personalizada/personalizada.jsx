import { useState, useEffect } from 'react';
import TituloSubtitulo from '../common/TituloSubtitulo';

export default function Personalizada({titulo, subtitulo, texto, link, imagem}) {
    
    
    return(
            <section className='personalizada'>
                <div className='personalizada_container'>
                    <TituloSubtitulo titulo={titulo} subtitulo={subtitulo} />
                    
                    {!texto?<a className='personalizada_button curto' href={link} target='blank'>Clique e saiba mais!</a>                       
                    :<div className='personalizada_corpo '>
                        <div>
                            <div className='personalizada_texto' dangerouslySetInnerHTML={{ __html: texto }} />
                            <a className='personalizada_button' href={link} target='blank'>Clique e saiba mais!</a>
                        </div>
                        <div>
                            <img className='personalizada_image' src={imagem}/>
                        </div>
                    </div>}                 
                    
                </div>
            </section>
    );
}