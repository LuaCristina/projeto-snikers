import '@/componentes/section/historia/historia.css';

const Historia = (props) => {
  return (
    <section>
      <div className="areaPrincipalHistoria">
        {/* Conteúdo do contêiner */}
        {props.data.map((item, index) => (
          <div key={index}>
            <h1 classe="tituloSessaoHistoria">{item.title}</h1>
            <div className="columns-container">
              <div className="esquerda-column">
                <img className="jordan" src={item.background.image} alt="" />
              </div>
              <div className="direita-column">
                <p className="texto-jordan">{item.content}</p>
                <div className="outra-div">
                  {/* <div className="tenis2"><img  src={item.itens.image} alt="" /></div> */}
                  {/* <div className="div2"><p>{item.itens.text}</p></div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Historia;

  