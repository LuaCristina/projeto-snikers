import '@/componentes/section/historia/historia.css'
const Historia = (props) => {
    return (
      <section>
        <div className="areaPrincipalHistoria">
          {/* Conteúdo do contêiner */}
          {props.data.map((item, index) => (
            <div className="columns-container" key={index}>
              <div className="esquerda-column">
                <img className="jordan" src={item.background.image} alt="" />
              </div>
              <div className="direita-column">
                <h1 className="tituloPrincipal">{item.title}</h1>
                <p className="texto-jordan">{item.content}</p>
                <div className="outra-div">
                  {/* <div className="tenis2"><img  src={item.itens.image} alt="" /></div> */}
                  {/* <div className="div2"><p>{item.itens.text}</p></div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Historia;
  