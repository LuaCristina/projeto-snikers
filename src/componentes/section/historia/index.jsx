import '@/componentes/section/historia/historia.css'



const Historia = (props) => {
    return (
        <section>
        <div className="areaPrincipalHistoria">
            {/* Conteúdo do contêiner */}
            {props.data.map((item, index) => (
                <div className="columns-container" key={index}>
                    <div className="esquerda-column">
                        <img className="jordan" src={item.background.image} />
                    </div>
                    <div className="direita-column">
                        <h1 className="tituloPrincipal">{item.title}</h1>
                        <p className="texto-jordan">{item.content}</p>
                        <div className="outra-div">
                            <div className="div1"></div>
                            <div className="div2"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    

    );
};


export default Historia;