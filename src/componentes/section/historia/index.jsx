import '@/componentes/section/historia/historia.css'



const Historia = (props) => {
    return (
        <section>
        <div className="areaPrincipalHistoria">
            {/* Conteúdo do contêiner */}
            {props.data.map((item, index) => (
                <div key={index}>
                    <h1 className="tituloPrincipal">{item.title}</h1>

                    <div className="esquerda-column">
                            <img className="jordan" src={item.background.image}/>
                    </div>

                    <div className="direita-column">
                        <div className="imagemPrincipal">
                            <p className='texto-jordan'>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};


export default Historia;