import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import Animacao from "../../tools/Animacao";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
    

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import Card from "./Card"

export default function Alertas() {
    return ( 
        <section className="alertas">
            <TituloSubtitulo titulo={titulosDescricoesSecoes["alertas"].titulo} subtitulo={titulosDescricoesSecoes["alertas"].subtitulo}/>
            
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                spaceBetween={0}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    930: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },                
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide><Card numero={1} texto={"Não aceite novos alimentos, come sempre a mesma coisa."} /></SwiperSlide>
                <SwiperSlide><Card numero={2} texto={"Rejeita grupos alimentares inteiros."} /></SwiperSlide>
                <SwiperSlide><Card numero={3} texto={"Você frequentemente substitui refeições da criança."} /></SwiperSlide>
                <SwiperSlide><Card numero={4} texto={"Faz ansia de vomito para determinados alimentos."} /></SwiperSlide>
                <SwiperSlide><Card numero={5} texto={"Tem grande preferência por determinadas alimentos."} /></SwiperSlide>
                <SwiperSlide><Card numero={6} texto={"Sempre Faz birra nas horas das refeições."} /></SwiperSlide>
                <SwiperSlide><Card numero={7} texto={"Sua criança não esta alimentando bem."} /></SwiperSlide>
               
            </Swiper>
            
            <div className="titulo-subtitulo-alerta">
                <TituloSubtitulo 
                titulo={"E aí, você se identificou com algum desses sinais ?"} 
                subtitulo={"Se SIM, então é hora de procurar um atendimento nutricional para o seu filho."}/>

            </div>            

        </section>
    )
}