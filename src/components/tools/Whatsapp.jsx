import { FloatingWhatsApp } from "react-floating-whatsapp"
import foto from '../../assets/sabrina_main.jpg'
export default function Whatsapp(){

    return (
        <FloatingWhatsApp 
            accountName="Sabrina Penido"
            statusMessage="Online"

            chatMessage="Olá, sou a Sabrina penido, posso ajudar a nutrir seu filho?"
            placeholder="Digite aqui uma mensagem ..."
            phoneNumber="+553488073742"
            textReplyTime="Normalmente responde em algumas horas"
            darkMode={false}
            avatar={foto}
            allowEsc={true}
            allowClickAway={true}

        />
    )
}