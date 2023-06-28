import TituloSubtitulo from "../common/TituloSubtitulo"
import titulosDescricoesSecoes from "../../../js/titulosDescricoesSecoes"
import Cartao from "./Cartao"

export default function Especialidades() {
    const especialidades = [
        {
            "titulo": "Amamentação",
            "descricao": "A amamentação é um ato de amor que nutre o corpo e aquece o coração, fortalecendo o vínculo entre mãe e bebê.",
            "imagem": "baby.png"       
        },
        {
            "titulo": "Introdução Alimentar",
            "descricao": "A introdução alimentar é uma fase deliciosa e cheia de descobertas, onde cada colherzinha é um passo importante para o crescimento saudável do bebê.",
            "imagem": "diet.png"       
        },
        {
            "titulo": "Seletividade Alimentar",
            "descricao": "Com paciência, amor e uma pitada de criatividade, é possível transformar a seletividade alimentar em uma aventura saborosa e divertida, ajudando as crianças a explorarem novos sabores e a desfrutarem de uma alimentação equilibrada.",
            "imagem": "playtime.png"       
        },
        {
            "titulo": "Obesidade/sobrepeso",
            "descricao": "Com uma abordagem carinhosa e consciente, podemos juntos transformar a jornada contra a obesidade infantil em uma dança de hábitos saudáveis, promovendo um futuro mais leve e cheio de vitalidade para as crianças.",
            "imagem": "obsdade.png"       
        },
        {
            "titulo": "Hipercolesterolemia",
            "descricao": "Com orientação nutricional adequada e escolhas inteligentes, podemos ajudar a transformar a batalha contra a hipercolesterolemia em uma história de saúde e equilíbrio, permitindo que as crianças cresçam com corações felizes e fortes.",
            "imagem": "cholesterol.png"       
        },
        {
            "titulo": "Autismo",
            "descricao": "Com uma abordagem nutricional amorosa e personalizada, podemos ajudar as crianças com autismo a florescerem, nutrindo seus corpos e mentes para que brilhem em todas as cores do espectro.",
            "imagem": "ribbon.png"       
        },
        {
            "titulo": "Alergias alimentares",
            "descricao": "Transformando restrições em sabores, as alergias alimentares não impedem a felicidade à mesa. Com criatividade e amor, nutrimos crianças com opções seguras e saborosas, promovendo uma alimentação alegre e saudável.",
            "imagem": "rash.png"       
        },
        {
            "titulo": "Ebooks, cursos e oficinas culinárias",
            "descricao": "Com os nossos Ebooks encantadores, cursos envolventes e oficinas culinárias divertidas, desvendamos o mundo mágico da alimentação saudável para crianças, nutrindo corpos e despertando a paixão pela cozinha de forma lúdica e deliciosa.",
            "imagem": "book.png"       
        }
    ]
    return (
        <section className="especialidades" id="especialidades">
            <TituloSubtitulo titulo={titulosDescricoesSecoes["especialidades"].titulo} subtitulo={titulosDescricoesSecoes["especialidades"].subtitulo}/>
          
            <div className="cartoes">
                { especialidades.map((especialidade, index) => {
                   return <Cartao key={index} titulo={especialidade.titulo} descricao={especialidade.descricao} imagem={especialidade.imagem}/>
                }) }
            </div>
        </section>
    )
}