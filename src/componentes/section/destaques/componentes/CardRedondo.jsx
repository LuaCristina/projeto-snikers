import 'src/componentes/section/destaques/componentes/CardRedondo.css';

const CardRedondo = (props) => {

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5531971376984';
    const message = 'Olá, estou interessado(a) no produto destacado '+ props.title;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
  }; 

  return (
    <div className="cardredondo-container">
      <div className="cardredondo-image">
        <img src={props.image} alt="Imagem Redonda" />
      </div>
      <div className="cardredondo-title">{props.title}</div>
      <div className="cardredondo-subtitle">{props.subtitle}</div>
      <button className="cardredondo-button" onClick={handleWhatsAppClick}>
        Quero
        <span>
          <img className="icon" src="https://raw.githubusercontent.com/LuaCristina/projeto-snikers/master/backend/resources/whatsapp2.png"/>    
        </span>
      </button>
    </div>
  )
}

export default CardRedondo;