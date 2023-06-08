import { FloatingWhatsApp } from "react-floating-whatsapp"

export default function Whatsapp(){

    return (
        <FloatingWhatsApp 
            accountName="Sabrina Penido"
            statusMessage=""
            chatMessage="Olá, sou a Sabrina penido, tudo bem?"
            placeholder="Digite aqui..."
            phoneNumber="+5534992317788"
            allowEsc={true}
            allowClickAway={true}

        />
    )
}