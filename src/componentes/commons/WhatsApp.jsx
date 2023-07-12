import {FloatingWhatsApp} from 'react-floating-whatsapp'


export default function WhatsApp(){
    return(
        <FloatingWhatsApp 
            accountName="Play in's SNK" 
            avatar="https://raw.githubusercontent.com/LuaCristina/projeto-snikers/master/backend/resources/logo_faq.png" 
            statusMessage='Online' 
            chatMessage="Olá, seja bem vindo ao Play in's SNK, como posso ajudar?" 
            placeholder='Digite sua mensagem' 
            phoneNumber='+5531971376984' 
            darkMode
            notification
            notificationDelay={5}
            allowClickAway
            allowEsc
            />
    )
}